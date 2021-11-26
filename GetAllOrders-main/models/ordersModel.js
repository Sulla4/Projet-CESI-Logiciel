"use strict";
var ordersSchema = require('../schema/orders');
/**
 * Get all orders
 * @returns
 */
function findAllOrders() {
    return new Promise(function (resolve, reject) {
        ordersSchema.find(function (err, orders) {
            if (err) {
                reject(err);
            }
            else {
                resolve(orders);
            }
        });
    });
}
/**
 * Get orders with user_id
 * @param id
 * @returns
 */
function findOrderWithUser_id(id) {
    return new Promise(function (resolve, reject) {
        ordersSchema.find({ user_id: id }, function (err, orders) {
            if (err) {
                reject(err);
            }
            else {
                resolve(orders);
            }
        });
    });
}
/**
 * Get orders with Restaurant_id
 * @param id
 * @returns
 */
function findOrderWithRestaurant_id(id) {
    return new Promise(function (resolve, reject) {
        ordersSchema.find({ restaurant_id: id }, function (err, orders) {
            if (err) {
                reject(err);
            }
            else {
                resolve(orders);
            }
        });
    });
}
/**
 * Put one order
 * @param body
 * @returns
 */
var putOneOrder = function (order_Number, body) {
    return new Promise(function (resolve, reject) {
        ordersSchema.updateOne({ order_Number: order_Number }, { order_status: body.order_status, deliverer: body.deliverer }, function (err, orders) {
            if (err) {
                reject(err);
            }
            else {
                resolve(ordersSchema.find({ order_Number: order_Number }, function (err, orders) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(orders);
                    }
                }));
            }
        });
    });
};
/**
 * Add one order
 * @param body
 * @returns
 */
var postOneOrder = function (body) {
    var orderSchema = new ordersSchema({
        order_Number: body.order_Number,
        user_id: body.user_id,
        restaurant_id: body.restaurant_id,
        orders_Details: body.orders_Details,
        order_payment: body.order_payment,
        order_status: body.order_status,
        orderDate: body.orderDate,
        order_address: body.order_address,
        deliverer: body.deliverer
    });
    return new Promise(function (resolve, reject) {
        orderSchema.save(function (err, orders) {
            if (err) {
                reject(err);
            }
            else {
                resolve(orders);
            }
        });
    });
};
/**
 * delete one order
 * @param id
 * @returns
 */
function deleteOrder(id) {
    return new Promise(function (resolve, reject) {
        ordersSchema.deleteOne({ order_Number: id }, function (err, orders) {
            if (err) {
                reject(err);
            }
            else {
                resolve(orders);
            }
        });
    });
}
module.exports = {
    findAllOrders: findAllOrders,
    findOrderWithUser_id: findOrderWithUser_id,
    postOneOrder: postOneOrder,
    putOneOrder: putOneOrder,
    findOrderWithRestaurant_id: findOrderWithRestaurant_id,
    deleteOrder: deleteOrder
};
