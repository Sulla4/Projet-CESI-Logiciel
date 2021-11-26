const mongoose = require('mongoose');

const ordersSchemas = mongoose.Schema({
  order_Number:{ type: String, required: true },
  user_id: { type: String, required: true },
  restaurant_id:{ type: String, required: true },
  orders_Details: { type: Object, required: true },
  order_payment : { type: Object, required: true },
  order_status : { type: String, required: true },
  orderDate : {type: String, required: true},
  order_address : { type: String, required: true },
  deliverer:{type: String, require:true}
});

module.exports = mongoose.model('orders', ordersSchemas);
