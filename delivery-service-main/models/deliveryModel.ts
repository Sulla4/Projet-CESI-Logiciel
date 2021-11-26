const deliverySchema = require('../schema/delivery');

/**
 * Get all delivery
 * @returns
 */
function findAllDelivery() {
    return new Promise((resolve, reject) => {
        deliverySchema.find((err: string, deliveries: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve(deliveries);
            }
        });
    });
}

/**
 * Get deliveries with user_id
 * @param id
 * @returns
 */
function findDeliveryWithOrderID(id: string) {
    return new Promise((resolve, reject) => {
        deliverySchema.find({ order_Number: id }, (err: string, deliveries: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve(deliveries);
            }
        });
    });
}
/**
 * Get deliveries with Restaurant_id
 * @param id
 * @returns
 */
function findDeliveryWithDelivererID(id: string) {
    return new Promise((resolve, reject) => {
        deliverySchema.find({ deliverer_id: id }, (err: string, deliveries: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve(deliveries);
            }
        });
    });
}

/**
 * Add one delivery
 * @param body
 * @returns
 */
const postOneDelivery = (body: any) => {
    const delivery = new deliverySchema({
        delivery_id :body.delivery_id,
        delivery_adress : body.delivery_adress,
        delivery_time : body.delivery_time,
        order_Number:body.order_Number,
        deliverer_id:body.deliverer_id
    });

    return new Promise((resolve, reject) => {
        delivery.save((err: string, delivery: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve(delivery);
            }
        });
    });
};

module.exports = {
    postOneDelivery : postOneDelivery,
    findDeliveryWithDelivererID:findDeliveryWithDelivererID,
    findDeliveryWithOrderID:findDeliveryWithOrderID,
    findAllDelivery:findAllDelivery
};