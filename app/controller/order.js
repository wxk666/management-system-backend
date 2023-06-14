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
    async update () {
        const {ctx} = this;
        const {_id, data} = ctx.request.body
        const item = await ctx.model.Order.update({_id},data);
        ctx.status = 200;
        ctx.body = {
            item
        };
    }
}

module.exports = OrderController;
