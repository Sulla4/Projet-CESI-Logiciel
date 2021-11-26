import express from 'express'
var routerOrdersMongo =express.Router();
var ordersController = require('../controllers/ordersController');

/* GET all orders */
routerOrdersMongo.get('/',ordersController.allOrders);

/* GET order with User*/
routerOrdersMongo.get('/:id/',ordersController.orderWithUser);

/* GET order with Restaurant*/
routerOrdersMongo.get('/res/:id/',ordersController.orderWithRestaurant);

/* ADD Order */
routerOrdersMongo.post('/', ordersController.addOrder);

/* Put Order */
routerOrdersMongo.put('/:order_Number', ordersController.updateOrder);

/*Delete Order*/
routerOrdersMongo.delete('/:id/',ordersController.deleteOrder);

module.exports = routerOrdersMongo;