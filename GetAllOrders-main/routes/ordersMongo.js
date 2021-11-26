"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routerOrdersMongo = express_1.default.Router();
var ordersController = require('../controllers/ordersController');
/* GET all orders */
routerOrdersMongo.get('/', ordersController.allOrders);
/* GET order with User*/
routerOrdersMongo.get('/:id/', ordersController.orderWithUser);
/* GET order with Restaurant*/
routerOrdersMongo.get('/res/:id/', ordersController.orderWithRestaurant);
/* ADD Order */
routerOrdersMongo.post('/', ordersController.addOrder);
/* Put Order */
routerOrdersMongo.put('/:order_Number', ordersController.updateOrder);
/*Delete Order*/
routerOrdersMongo.delete('/:id/', ordersController.deleteOrder);
module.exports = routerOrdersMongo;
