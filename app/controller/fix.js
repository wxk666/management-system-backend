'use strict';

const {Controller} = require('egg');

class FixController extends Controller {
    async list() {
        const {ctx} = this;
        const list = await ctx.model.Fix.find({});
        ctx.status = 200;
        ctx.body = {
            list
        };
    }
    async remove () {
        const {ctx} = this;
        const {_id} = ctx.request.body
        const res = await ctx.model.Fix.remove({_id})
        ctx.status = 200;
        ctx.body = {
            res
        };
    }
}

module.exports = FixController;
