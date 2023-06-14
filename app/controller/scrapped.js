'use strict';

const {Controller} = require('egg');

class ScrappedController extends Controller {
    async list() {
        const {ctx} = this;
        const list = await ctx.model.Scrapped.find({});
        ctx.status = 200;
        ctx.body = {
            list
        };
    }
    async remove () {
        const {ctx} = this;
        const {_id} = ctx.request.body
        const res = await ctx.model.Scrapped.remove({_id})
        ctx.status = 200;
        ctx.body = {
            res
        };
    }
    async update () {
        const {ctx} = this;
        const {_id, data} = ctx.request.body
        const item = await ctx.model.Scrapped.update({_id},data);
        ctx.status = 200;
        ctx.body = {
            item
        };
    }
}

module.exports = ScrappedController;
