"use strict";
var mongoose = require('mongoose');
var restSchema = mongoose.Schema({
    restaurant_id: { type: String, required: true },
    restaurant_name: { type: String, required: true },
    picture: { type: String, required: true },
    schedules: { type: String, required: true },
    estimated_average_delivery: { type: String, required: true },
    means_of_payment_accepted: { type: Array, required: true },
    articles: { type: Object, required: true },
    menus: { type: Object, required: true }
});
module.exports = mongoose.model('restaurants', restSchema);
