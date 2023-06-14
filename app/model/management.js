'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ManagementSchema = new Schema({

    name: { type: String, }, // 设备名
    id: { type: String, }, // 设备号
    status: { type: String, }, // 状态
  });
  return mongoose.model('Management',ManagementSchema,'management');
}
