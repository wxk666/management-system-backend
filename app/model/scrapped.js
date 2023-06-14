'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ScrappedSchema = new Schema({
    creator: { type: String },// 批准人
    managementId: { type: String },// 设备号
    managementName: { type: String },// 设备名
    money: { type: Number }, // 购买经费
    time: { type: Number }, // 报废日期

  });
  return mongoose.model('Scrapped',ScrappedSchema,'scrapped');
}
