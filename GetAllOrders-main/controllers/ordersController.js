"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ordersModel = require('../models/ordersModel');
var function404 = require('../models/function404');
var request = require('request-promise-native');
function allOrders(req, res, next) {
    //Call API Token
    if (req.headers.token == null) {
        res.status(404).json({ 'error': 'missing token' });
    }
    else {
        var clientServerOptions = {
            uri: "http://localhost:3005/auth/verify/",
            body: JSON.stringify(req.body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: req.headers.token
            }
        };
        request(clientServerOptions, function (error, response) {
            if (response.statusCode == 200) {
                ordersModel
                    .findAllOrders()
                    .then(function (orders) { return function404.checkResultGet(orders, res); })
                    .catch(function (err) { return res.status(400).json({ error: err }); });
            }
            else {
                var msg = JSON.parse(response.body);
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}
function orderWithUser(req, res, next) {
    //Call API Token
    if (req.headers.token == null) {
        res.status(404).json({ 'error': 'missing parameters' });
    }
    else {
        var clientServerOptions = {
            uri: "http://localhost:3005/auth/verify/",
            body: JSON.stringify(req.body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: req.headers.token
            }
        };
        request(clientServerOptions, function (error, response) {
            if (response.statusCode == 200) {
                ordersModel
                    .findOrderWithUser_id(req.params.id)
                    .then(function (order) { return function404.checkResultGet(order, res); })
                    .catch(function (err) { return res.status(400).json({ err: err }); });
            }
            else {
                var msg = JSON.parse(response.body);
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}
function orderWithRestaurant(req, res, next) {
    //Call API Token
    if (req.headers.token == null) {
        res.status(404).json({ 'error': 'missing parameters' });
    }
    else {
        var clientServerOptions = {
            uri: "http://localhost:3005/auth/verify/",
            body: JSON.stringify(req.body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: req.headers.token
            }
        };
        request(clientServerOptions, function (error, response) {
            if (response.statusCode == 200) {
                ordersModel
                    .findOrderWithRestaurant_id(req.params.id)
                    .then(function (order) { return function404.checkResultGet(order, res); })
                    .catch(function (err) { return res.status(400).json({ err: err }); });
            }
            else {
                var msg = JSON.parse(response.body);
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}
function addOrder(req, res, next) {
    //Call API Token
    if (req.body.order_Number == null || req.body.user_id == null || req.body.restaurant_id == null ||
        req.body.orders_Details == null || req.body.order_payment == null || req.body.order_status == null ||
        req.body.orderDate == null || req.headers.token == null) {
        console.log(req.body);
        res.status(404).json({ 'error': 'missing parameters' });
    }
    else {
        console.log(JSON.stringify(req.body));
        console.log(req.headers.token);
        var clientServerOptions = {
            uri: "http://localhost:3005/auth/verify/",
            body: JSON.stringify(req.body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: req.headers.token
            }
        };
        request(clientServerOptions, function (error, response) {
            if (response.statusCode == 200) {
                ordersModel
                    .postOneOrder(req.body)
                    .then(function (orders) { return function404.checkResultPostAndPut(orders, res); })
                    .catch(function (err) { return res.status(400).json({ response: 'false', err: err }); });
            }
            else {
                var msg = JSON.parse(response.body);
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}
function updateOrder(req, res, next) {
    if (req.params.order_Number == null || req.headers.token == null) {
        res.status(404).json({ 'error': 'missing parameters' });
    }
    else {
        var clientServerOptions = {
            uri: "http://localhost:3005/auth/verify/",
            body: JSON.stringify(req.body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: req.headers.token
            }
        };
        request(clientServerOptions, function (error, response) {
            if (response.statusCode == 200) {
                ordersModel
                    .putOneOrder(req.params.order_Number, req.body)
                    .then(function (orders) { return function404.checkResultPostAndPut(orders, res); })
                    .catch(function (err) { return res.status(400).json({ response: 'false', err: err }); });
            }
            else {
                var msg = JSON.parse(response.body);
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}
function deleteOrder(req, res, next) {
    if (req.params.id == null || req.headers.token == null) {
        res.status(404).json({ 'error': 'missing parameters' });
    }
    else {
        var clientServerOptions = {
            uri: "http://localhost:3005/auth/verify/",
            body: JSON.stringify(req.body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: req.headers.token
            }
        };
        request(clientServerOptions, function (error, response) {
            if (response.statusCode == 200) {
                ordersModel
                    .deleteOrder(req.params.id)
                    .then(function (orders) { return res.status(200).json({ response: 'true', orders: orders }); })
                    .catch(function (err) { return res.status(400).json({ response: 'false', err: err }); });
            }
            else {
                var msg = JSON.parse(response.body);
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}
module.exports = {
    allOrders: allOrders,
    orderWithUser: orderWithUser,
    orderWithRestaurant: orderWithRestaurant,
    addOrder: addOrder,
    updateOrder: updateOrder,
    deleteOrder: deleteOrder
};
