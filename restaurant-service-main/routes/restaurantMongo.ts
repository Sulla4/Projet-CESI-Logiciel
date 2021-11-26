import express from 'express'

var routerRestaurantMongo =express.Router();
var restaurantController = require('../controllers/restContro');

/* GET all restaurant */
routerRestaurantMongo.get('/', restaurantController.allRestaurant);

/* GET restaurant with restaurant ID*/
routerRestaurantMongo.get('/:restaurant_id/', restaurantController.findOneRestaurant);

/* ADD restaurant Menu */
routerRestaurantMongo.post('/',restaurantController.postOneRestaurant);

/*PUT restaurant Menu*/
routerRestaurantMongo.put('/:restaurant_id',restaurantController.updateRestaurantWithID);

/*DELETE restaurant Menu*/
routerRestaurantMongo.delete('/:restaurant_id',restaurantController.restDelete)
module.exports = routerRestaurantMongo;