import {NextFunction, Request, Response} from "express";
const function404 = require("../models/function404");
const restModel = require( "../models/restaurantModel");
const request = require('request-promise-native');

function allRestaurant (req: Request, res: Response, next: NextFunction){
    restModel.findAllRestaurant()
        .then((restaurants: Array<any>) => function404.checkResultGet(restaurants,res))
        .catch((err: string) => res.status(400).json({ error: err }));
};

function findOneRestaurant (req: Request, res: Response, next: NextFunction){
    //Call API Token
    if (req.params.restaurant_id == null || req.headers.token == null) {
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
                restModel
                    .findRestaurantWithRestaurantID(req.params.restaurant_id)
                    .then((restaurant: Array<any>) => function404.checkResultGet(restaurant,res))
                    .catch((err: string) => res.status(400).json({ err: err }));
            } else {
                const msg = JSON.parse(response.body)
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}

function postOneRestaurant (req: Request, res: Response, next: NextFunction){
    //Call API Token
    if (req.body.restaurant_id == null || req.body.restaurant_name == null || req.body.picture == null
        || req.body.schedules == null || req.body.estimated_average_delivery == null
        || req.body.means_of_payment_accepted == null || req.body.articles == null
        || req.body.menus == null || req.headers.token == null) {
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
                restModel
                    .postOneRestaurant(req.body)
                    .then((restaurants: Array<any>) => function404.checkResultPostAndPut(restaurants, res))
                    .catch((err: string) => res.status(400).json({ response: 'false', err: err }));
            } else {
                const msg = JSON.parse(response.body)
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}
function updateRestaurantWithID(req: Request, res: Response, next: NextFunction){
    //Call API Token
    if (req.params.restaurant_id == null || req.headers.token == null) {
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
                restModel
                    .UpdateRestaurantWithRestaurantID(req.params.restaurant_id,req.body)
                    .then(function (restaurants:Array<any>) { return function404.checkResultPostAndPut(restaurants, res); })
                    .catch((err: string) => res.status(400).json({ response: 'false', err: err }));
            } else {
                const msg = JSON.parse(response.body)
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}

function restDelete(req:Request, res:Response, next:NextFunction){
    //Call API Token
    if (req.params.restaurant_id == null || req.headers.token == null) {
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
                restModel
                    .deleteRestaurant(req.params.restaurant_id)
                    .then((orders: Array<any>) => res.status(200).json({ response: 'true', orders }))
                    .catch((err: string) => res.status(400).json({ response: 'false', err: err }));
            } else {
                const msg = JSON.parse(response.body)
                return res.status(response.statusCode).json(msg.message);
            }
        });
    }
}

module.exports={
    allRestaurant:allRestaurant,
    findOneRestaurant:findOneRestaurant,
    postOneRestaurant:postOneRestaurant,
    updateRestaurantWithID:updateRestaurantWithID,
    restDelete:restDelete
}