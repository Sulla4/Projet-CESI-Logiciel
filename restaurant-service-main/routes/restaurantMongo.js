"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routerRestaurantMongo = express_1.default.Router();
var restaurantController = require('../controllers/restContro');
/* GET all restaurant */
routerRestaurantMongo.get('/', restaurantController.allRestaurant);
/* GET restaurant with restaurant ID*/
routerRestaurantMongo.get('/:restaurant_id/', restaurantController.findOneRestaurant);
/* ADD restaurant Menu */
routerRestaurantMongo.post('/', restaurantController.postOneRestaurant);
/*PUT restaurant Menu*/
routerRestaurantMongo.put('/:restaurant_id', restaurantController.updateRestaurantWithID);
/*DELETE restaurant Menu*/
routerRestaurantMongo.delete('/:restaurant_id', restaurantController.restDelete);
module.exports = routerRestaurantMongo;
