"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var function404 = require("../models/function404");
var restModel = require("../models/restaurantModel");
var request = require('request-promise-native');
function allRestaurant(req, res, next) {
    //Call API Token
    restModel.findAllRestaurant()
        .then(function (restaurants) { return function404.checkResultGet(restaurants, res); })
        .catch(function (err) { return res.status(400).json({ error: err }); });
}
;
function findOneRestaurant(req, res, next) {
    //Call API Token
    console.log(req.headers.token);
    if (req.params.restaurant_id == null || req.headers.token == null) {
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
                restModel
                    .findRestaurantWithRestaurantID(req.params.restaurant_id)
                    .then(function (restaurant) { return function404.checkResultGet(restaurant, res); })
                    .catch(function (err) { return res.status(400).json({ err: err }); });
            }
            else {
                var msg = JSON.parse(response.body);
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}
function postOneRestaurant(req, res, next) {
    //Call API Token
    console.log(req.headers.token);
    if (req.body.restaurant_id == null || req.body.restaurant_name == null || req.body.picture == null
        || req.body.schedules == null || req.body.estimated_average_delivery == null
        || req.body.means_of_payment_accepted == null || req.body.articles == null
        || req.body.menus == null || req.headers.token == null) {
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
                restModel
                    .postOneRestaurant(req.body)
                    .then(function (restaurants) { return function404.checkResultPostAndPut(restaurants, res); })
                    .catch(function (err) { return res.status(400).json({ response: 'false', err: err }); });
            }
            else {
                var msg = JSON.parse(response.body);
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}
function updateRestaurantWithID(req, res, next) {
    //Call API Token
    console.log(req.headers.token);
    if (req.params.restaurant_id == null || req.headers.token == null) {
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
                restModel
                    .UpdateRestaurantWithRestaurantID(req.params.restaurant_id, req.body)
                    .then(function (restaurants) { return function404.checkResultPostAndPut(restaurants, res); })
                    .catch(function (err) { return res.status(400).json({ response: 'false', err: err }); });
            }
            else {
                var msg = JSON.parse(response.body);
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}
function restDelete(req, res, next) {
    //Call API Token
    console.log(req.headers.token);
    if (req.params.restaurant_id == null || req.headers.token == null) {
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
                restModel
                    .deleteRestaurant(req.params.restaurant_id)
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
    allRestaurant: allRestaurant,
    findOneRestaurant: findOneRestaurant,
    postOneRestaurant: postOneRestaurant,
    updateRestaurantWithID: updateRestaurantWithID,
    restDelete: restDelete
};
