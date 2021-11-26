"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deliveryModel = require("../models/deliveryModel");
var function404 = require("../models/function404");
var request = require('request-promise-native');
function allDelivery(req, res, next) {
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
                deliveryModel
                    .findAllDelivery()
                    .then(function (deliveries) { return function404.checkResultGet(deliveries, res); })
                    .catch(function (err) { return res.status(400).json({ error: err }); });
            }
            else {
                var msg = JSON.parse(response.body);
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}
function getDeliveryWithOrder(req, res, next) {
    //Call API Token
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
                deliveryModel
                    .findDeliveryWithOrderID(req.params.id)
                    .then(function (delivery) { return function404.checkResultGet(delivery, res); })
                    .catch(function (err) { return res.status(400).json({ err: err }); });
            }
            else {
                var msg = JSON.parse(response.body);
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}
function getDeliveryWithRestaurant(req, res, next) {
    //Call API Token
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
                deliveryModel
                    .findDeliveryWithDelivererID(req.params.id)
                    .then(function (delivery) { return function404.checkResultGet(delivery, res); })
                    .catch(function (err) { return res.status(400).json({ err: err }); });
            }
            else {
                var msg = JSON.parse(response.body);
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}
function postOneDelivery(req, res, next) {
    //Call API Token
    console.log(req.headers.token);
    if (req.body.delivery_id == null || req.body.delivery_adress == null || req.body.delivery_time == null
        || req.body.order_Number == null || req.body.deliverer_id == null || req.headers.token == null) {
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
                deliveryModel
                    .postOneDelivery(req.body)
                    .then(function (deliveries) { return function404.checkResultPostAndPut(deliveries, res); })
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
    allDelivery: allDelivery,
    getDeliveryWithOrder: getDeliveryWithOrder,
    getDeliveryWithRestaurant: getDeliveryWithRestaurant,
    postOneDelivery: postOneDelivery
};
