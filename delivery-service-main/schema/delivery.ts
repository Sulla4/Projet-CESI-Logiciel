const mongoose = require('mongoose');

const deliveriesSchemas = mongoose.Schema({
    delivery_id :{ type: String, required: true },
    delivery_adress : { type: String, required: true },
    delivery_time : { type: String, required: true },
    order_Number:{ type: String, required: true },
    deliverer_id:{type: String, require:true}
});

module.exports = mongoose.model('deliveries', deliveriesSchemas);
