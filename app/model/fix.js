'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const FixSchema = new Schema({
    creator: { type: String },// 维修人
    managementId: { type: String },// 设备号
    managementName: { type: String },// 设备名
    money: { type: Number }, // 维修经费
    time: { type: Number }, // 维修日期

  });
  return mongoose.model('Fix',FixSchema,'fix');
}
