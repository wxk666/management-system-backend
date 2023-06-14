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
        const {name, count, creator, money,time,id} = ctx.request.body
        for(let i = 0;i < count;i++){
            const management = await ctx.model.Management.create({
                id: `${id}-${i}`,
                name: `${name} - ${i}`,
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
            time:new Date(time).getTime(),
            count
        })
        ctx.status = 200;
        ctx.body = {
            order
        };
    }
    async fix() {
        const {ctx} = this;
        const {_id, creator, money, time} = ctx.request.body
        const management = await ctx.model.Management.findOne({_id})
        management.status = "维修"
        management.save()
        const fix = await ctx.model.Fix.create({
            creator,
            money,
            managementId: management.id,
            managementName: management.name,
            time:new Date(time).getTime(),
        })
        ctx.status = 200;
        ctx.body = {
            fix
        };
    }
    async scrapped() {
        const {ctx} = this;
        const {_id, creator,time} = ctx.request.body
        const management = await ctx.model.Management.findOne({_id})
        management.status = "报废"
        management.save()
        const scrapped = await ctx.model.Scrapped.create({
            creator,
            managementId: management.id,
            managementName: management.name,
            time:new Date(time).getTime(),
        })
        ctx.status = 200;
        ctx.body = {
            scrapped
        };
    }
}

module.exports = ManagementController;
