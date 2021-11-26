const ordersSchema = require('../schema/orders');

/**
 * Get all orders
 * @returns
 */
function findAllOrders() {
    return new Promise((resolve, reject) => {
        ordersSchema.find((err: string, orders: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve(orders);
            }
        });
    });
}

/**
 * Get orders with user_id
 * @param id
 * @returns
 */
function findOrderWithUser_id(id: string) {
    return new Promise((resolve, reject) => {
        ordersSchema.find({ user_id: id }, (err: string, orders: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve(orders);
            }
        });
    });
}
/**
 * Get orders with Restaurant_id
 * @param id
 * @returns
 */
function findOrderWithRestaurant_id(id: string) {
    return new Promise((resolve, reject) => {
        ordersSchema.find({ restaurant_id: id }, (err: string, orders: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve(orders);
            }
        });
    });
}
/**
 * Put one order
 * @param body
 * @returns
 */
const putOneOrder = (order_Number:any, body: any) => {
    return new Promise((resolve, reject) => {
          ordersSchema.updateOne({order_Number:order_Number},{order_status:body.order_status,deliverer:body.deliverer},(err: string, orders: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve( ordersSchema.find({ order_Number: order_Number }, (err: string, orders: Array<any>) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(orders);
                    }
                }));
            }
        });
    });
};

/**
 * Add one order
 * @param body
 * @returns
 */
const postOneOrder = (body: any) => {
    const orderSchema = new ordersSchema({
        order_Number: body.order_Number,
        user_id: body.user_id,
        restaurant_id:body.restaurant_id,
        orders_Details: body.orders_Details,
        order_payment:body.order_payment,
        order_status:body.order_status,
        orderDate:body.orderDate,
        order_address:body.order_address,
        deliverer:body.deliverer
    });

    return new Promise((resolve, reject) => {
        orderSchema.save((err: string, orders: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve(orders);
            }
        });
    });
};

/**
 * delete one order
 * @param id
 * @returns
 */
function deleteOrder(id: string) {
    return new Promise((resolve, reject) => {
        ordersSchema.deleteOne({ order_Number: id }, (err: string, orders: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve(orders);
            }
        });
    });
}

module.exports = {
    findAllOrders: findAllOrders,
    findOrderWithUser_id:findOrderWithUser_id,
    postOneOrder:postOneOrder,
    putOneOrder:putOneOrder,
    findOrderWithRestaurant_id:findOrderWithRestaurant_id,
    deleteOrder:deleteOrder
};