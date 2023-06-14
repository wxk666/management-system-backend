'use strict';

const {Controller} = require('egg');

class ManagementController extends Controller {
    async list() {
        const {ctx} = this;
        const {_id,name} = ctx.query
        let condition = {}
        if(_id){
            condition._id = _id
        }
        if(name){
            condition.name ={$regex: name}
        }
        const list = await ctx.model.Management.find(condition);
        ctx.status = 200;
        ctx.body = {
            list
        };
    }
    async remove () {
        const {ctx} = this;
        const {_id} = ctx.request.body
        const res = await ctx.model.Management.remove({_id})
        ctx.status = 200;
        ctx.body = {
            res
        };
    }
    async buy() {
        const {ctx} = this;
        const managementIds = []
        const managementNames = []
        const {name, count, creator, money} = ctx.request.body
        for(let i = 0;i < count;i++){
            const management = await ctx.model.Management.create({
                name: name + i,
                status:"正常"
            })
            managementIds.push(management.id)
            managementNames.push(management.name)
        }
        const order = await ctx.model.Order.create({
            creator,
            money,
            managementIds,
            managementNames,
            time: Date.now(),
            count
        })
        ctx.status = 200;
        ctx.body = {
            order
        };
    }
    async fix() {
        const {ctx} = this;
        const {_id, creator, money} = ctx.request.body
        const management = await ctx.model.Management.findOne({_id})
        management.status = "维修"
        management.save()
        const fix = await ctx.model.Fix.create({
            creator,
            money,
            managementId: _id,
            managementName: management.name,
            time: Date.now(),
        })
        ctx.status = 200;
        ctx.body = {
            fix
        };
    }
    async scrapped() {
        const {ctx} = this;
        const {_id, creator} = ctx.request.body
        const management = await ctx.model.Management.findOne({_id})
        management.status = "报废"
        management.save()
        const scrapped = await ctx.model.Scrapped.create({
            creator,
            managementId: _id,
            managementName: management.name,
            time: Date.now(),
        })
        ctx.status = 200;
        ctx.body = {
            scrapped
        };
    }
}

module.exports = ManagementController;
