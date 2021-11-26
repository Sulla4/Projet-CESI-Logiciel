import {NextFunction, Request, Response} from "express";
const deliveryModel = require("../models/deliveryModel");
const function404 = require("../models/function404");
const request = require('request-promise-native');

function allDelivery(req: Request, res: Response, next: NextFunction){
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
                deliveryModel
                    .findAllDelivery()
                    .then((deliveries: Array<any>) => function404.checkResultGet(deliveries,res))
                    .catch((err: string) => res.status(400).json({ error: err }));
            } else {
                const msg = JSON.parse(response.body)
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }

}

function getDeliveryWithOrder(req: Request, res: Response, next: NextFunction) {
    //Call API Token
    if (req.params.id == null || req.headers.token == null) {
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
                deliveryModel
                    .findDeliveryWithOrderID(req.params.id)
                    .then((delivery: Array<any>) => function404.checkResultGet(delivery,res))
                    .catch((err: string) => res.status(400).json({ err: err }));
            } else {
                const msg = JSON.parse(response.body)
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}

function getDeliveryWithRestaurant(req: Request, res: Response, next: NextFunction){
    //Call API Token
    if (req.params.id == null || req.headers.token == null) {
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
                deliveryModel
                    .findDeliveryWithDelivererID(req.params.id)
                    .then((delivery: Array<any>) => function404.checkResultGet(delivery,res))
                    .catch((err: string) => res.status(400).json({ err: err }));
            } else {
                const msg = JSON.parse(response.body)
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}

function postOneDelivery(req: Request, res: Response, next: NextFunction){
    //Call API Token
    if (req.body.delivery_id == null || req.body.delivery_adress == null || req.body.delivery_time == null
        || req.body.order_Number == null || req.body.deliverer_id == null || req.headers.token == null) {
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
                deliveryModel
                    .postOneDelivery(req.body)
                    .then((deliveries: Array<any>) => function404.checkResultPostAndPut(deliveries, res))
                    .catch((err: string) => res.status(400).json({ response: 'false', err: err }));
            } else {
                const msg = JSON.parse(response.body)
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}

module.exports={
    allDelivery:allDelivery,
    getDeliveryWithOrder:getDeliveryWithOrder,
    getDeliveryWithRestaurant:getDeliveryWithRestaurant,
    postOneDelivery:postOneDelivery
}