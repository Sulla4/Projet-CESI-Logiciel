import express from 'express'
var routerDeliveryMongo =express.Router();
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