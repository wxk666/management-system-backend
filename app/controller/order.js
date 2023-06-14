'use strict';

const {Controller} = require('egg');

class OrderController extends Controller {
    async list() {
        const {ctx} = this;
        const list = await ctx.model.Order.find({});
        ctx.status = 200;
        ctx.body = {
            list
        };
    }
    async remove () {
        const {ctx} = this;
        const {_id} = ctx.request.body
        const res = await ctx.model.Order.remove({_id})
        ctx.status = 200;
        ctx.body = {
            res
        };
    }
}

module.exports = OrderController;
