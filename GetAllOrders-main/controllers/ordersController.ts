import {NextFunction, Request, Response} from "express";
const ordersModel = require('../models/ordersModel');
const function404 = require('../models/function404');
const request = require('request-promise-native');

function allOrders(req: Request, res: Response, next: NextFunction){
    //Call API Token
    if (req.headers.token == null) {
        res.status(404).json({'error': 'missing token'});
    } else {
        var clientServerOptions = {
            uri: `http://localhost:3005/auth/verify/`,
            body: JSON.stringify(req.body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token : req.headers.token
            }
        }
        request(clientServerOptions, function (error: Error, response: any) {
            if (response.statusCode == 200) {
                ordersModel
                    .findAllOrders()
                    .then((orders: Array<any>) => function404.checkResultGet(orders,res))
                    .catch((err: string) => res.status(400).json({ error: err }));
            } else {
                const msg = JSON.parse(response.body)
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}

function orderWithUser(req: Request, res: Response, next: NextFunction){
    //Call API Token
    if (req.headers.token == null) {
        res.status(404).json({'error': 'missing parameters'});
    } else {
        var clientServerOptions = {
            uri: `http://localhost:3005/auth/verify/`,
            body: JSON.stringify(req.body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token : req.headers.token
            }
        }
        request(clientServerOptions, function (error: Error, response: any) {
            if (response.statusCode == 200) {
                ordersModel
                    .findOrderWithUser_id(req.params.id)
                    .then((order: Array<any>) => function404.checkResultGet(order,res))
                    .catch((err: string) => res.status(400).json({ err: err }));
            } else {
                const msg = JSON.parse(response.body)
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }

}

function orderWithRestaurant(req: Request, res: Response, next: NextFunction){
    //Call API Token
    if (req.headers.token == null) {
        res.status(404).json({'error': 'missing parameters'});
    } else {
        var clientServerOptions = {
            uri: `http://localhost:3005/auth/verify/`,
            body: JSON.stringify(req.body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token : req.headers.token
            }
        }
        request(clientServerOptions, function (error: Error, response: any) {
            if (response.statusCode == 200) {
                ordersModel
                    .findOrderWithRestaurant_id(req.params.id)
                    .then((order: Array<any>) => function404.checkResultGet(order,res))
                    .catch((err: string) => res.status(400).json({ err: err }));
            } else {
                const msg = JSON.parse(response.body)
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}

function addOrder(req: Request, res: Response, next: NextFunction){
    //Call API Token
    if (req.body.order_Number == null || req.body.user_id == null ||req.body.restaurant_id == null ||
        req.body.orders_Details == null ||req.body.order_payment == null ||req.body.order_status == null ||
        req.body.orderDate == null ||req.headers.token == null) {
        res.status(404).json({'error': 'missing parameters'});
    } else {
        var clientServerOptions = {
            uri: `http://localhost:3005/auth/verify/`,
            body: JSON.stringify(req.body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token : req.headers.token
            }
        }
        request(clientServerOptions, function (error: Error, response: any) {
            if (response.statusCode == 200) {
                ordersModel
                    .postOneOrder(req.body)
                    .then((orders: Array<any>) => function404.checkResultPostAndPut(orders, res))
                    .catch((err: string) => res.status(400).json({ response: 'false', err: err }));
            } else {
                const msg = JSON.parse(response.body)
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}

function updateOrder(req: Request, res: Response, next: NextFunction){
    if (req.params.order_Number == null|| req.headers.token == null) {
        res.status(404).json({'error': 'missing parameters'});
    } else {
        var clientServerOptions = {
            uri: `http://localhost:3005/auth/verify/`,
            body: JSON.stringify(req.body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token : req.headers.token
            }
        }
        request(clientServerOptions, function (error: Error, response: any) {
            if (response.statusCode == 200) {
                ordersModel
                    .putOneOrder(req.params.order_Number,req.body)
                    .then(function (orders:Array<any>) { return function404.checkResultPostAndPut(orders, res); })
                    .catch((err: string) => res.status(400).json({ response: 'false', err: err }));
            } else {
                const msg = JSON.parse(response.body)
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}

function deleteOrder(req:Request, res:Response, next:NextFunction){
    if (req.params.id == null|| req.headers.token == null) {
        res.status(404).json({'error': 'missing parameters'});
    } else {
        var clientServerOptions = {
            uri: `http://localhost:3005/auth/verify/`,
            body: JSON.stringify(req.body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token : req.headers.token
            }
        }
        request(clientServerOptions, function (error: Error, response: any) {
            if (response.statusCode == 200) {
                ordersModel
                    .deleteOrder(req.params.id)
                    .then((orders: Array<any>) => res.status(200).json({ response: 'true', orders }))
                    .catch((err: string) => res.status(400).json({ response: 'false', err: err }));
            } else {
                const msg = JSON.parse(response.body)
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}

module.exports = {
    allOrders:allOrders,
    orderWithUser:orderWithUser,
    orderWithRestaurant:orderWithRestaurant,
    addOrder:addOrder,
    updateOrder:updateOrder,
    deleteOrder:deleteOrder
};