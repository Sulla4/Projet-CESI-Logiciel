"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routerDeliveryMongo = express_1.default.Router();
var deliveryController = require('../controllers/deliveryController');
/* GET all delivery */
routerDeliveryMongo.get('/', deliveryController.allDelivery);
/* GET delivery with User*/
routerDeliveryMongo.get('/:id/', deliveryController.getDeliveryWithOrder);
/* GET Delivery with Restaurant*/
routerDeliveryMongo.get('/del/:id/', deliveryController.getDeliveryWithRestaurant);
/* ADD Delivery */
routerDeliveryMongo.post('/', deliveryController.postOneDelivery);
module.exports = routerDeliveryMongo;
