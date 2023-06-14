'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({

    username: { type: String, unique: true}, // 用户名
    name: { type: String, }, // 姓名
    password: { type: String, }, // 密码
  });
  return mongoose.model('User',UserSchema,'user');
}
