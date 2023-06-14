'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const OrderSchema = new Schema({
    count: { type: Number, }, // 购买数量
    creator: { type: String },// 购买者
    managementIds: {type: Array, default:[]}, // 设备号
    managementNames: {type: Array, default:[]}, // 设备名
    money: { type: Number }, // 购买经费
    time: { type: Number }, // 购买时间

  });
  return mongoose.model('Order',OrderSchema,'order');
}
