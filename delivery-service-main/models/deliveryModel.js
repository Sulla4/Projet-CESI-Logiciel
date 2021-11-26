"use strict";
var deliverySchema = require('../schema/delivery');
/**
 * Get all delivery
 * @returns
 */
function findAllDelivery() {
    return new Promise(function (resolve, reject) {
        deliverySchema.find(function (err, deliveries) {
            if (err) {
                reject(err);
            }
            else {
                resolve(deliveries);
            }
        });
    });
}
/**
 * Get deliveries with user_id
 * @param id
 * @returns
 */
function findDeliveryWithOrderID(id) {
    return new Promise(function (resolve, reject) {
        deliverySchema.find({ order_Number: id }, function (err, deliveries) {
            if (err) {
                reject(err);
            }
            else {
                resolve(deliveries);
            }
        });
    });
}
/**
 * Get deliveries with Restaurant_id
 * @param id
 * @returns
 */
function findDeliveryWithDelivererID(id) {
    return new Promise(function (resolve, reject) {
        deliverySchema.find({ deliverer_id: id }, function (err, deliveries) {
            if (err) {
                reject(err);
            }
            else {
                resolve(deliveries);
            }
        });
    });
}
/**
 * Add one delivery
 * @param body
 * @returns
 */
var postOneDelivery = function (body) {
    var delivery = new deliverySchema({
        delivery_id: body.delivery_id,
        delivery_adress: body.delivery_adress,
        delivery_time: body.delivery_time,
        order_Number: body.order_Number,
        deliverer_id: body.deliverer_id
    });
    return new Promise(function (resolve, reject) {
        delivery.save(function (err, delivery) {
            if (err) {
                reject(err);
            }
            else {
                resolve(delivery);
            }
        });
    });
};
module.exports = {
    postOneDelivery: postOneDelivery,
    findDeliveryWithDelivererID: findDeliveryWithDelivererID,
    findDeliveryWithOrderID: findDeliveryWithOrderID,
    findAllDelivery: findAllDelivery
};
