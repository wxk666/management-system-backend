'use strict';

const {Controller} = require('egg');

class UserController extends Controller {
    async init() {
        const {ctx} = this;
        const admin = await ctx.model.User.create({
            username: "admin",
            password: "admin",
            name: "管理员"
        });
         await ctx.model.User.create({
            username: "user",
            password: "user",
            name: "用户"
        });
        ctx.status = 201;
        ctx.body = {id: admin.id};
    }
    async login() {
        const {ctx} = this;
        const {username, password} = ctx.request.body
        const user = await ctx.model.User.findOne({username});
        if(user && user.password === password){
            ctx.status = 200;
            ctx.body = {
                username: user.username,
                name: user.name,
            };
        }
        else {
            ctx.status = 403
            ctx.body = {
                message: "用户名或密码错误"
            }
        }
    }
}

module.exports = UserController;
