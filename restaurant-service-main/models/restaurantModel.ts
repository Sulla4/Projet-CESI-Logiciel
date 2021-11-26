const restaurantSchema = require('../schema/restaurant');

/**
 * Get all delivery
 * @returns
 */
function findAllRestaurant() {
    return new Promise((resolve, reject) => {
        restaurantSchema.find((err: string, restaurants: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve(restaurants);
            }
        });
    });
}

/**
 * Get restaurant with Restaurant_id
 * @param id
 * @returns
 */
function findRestaurantWithRestaurantID(restaurant_id: string) {
    return new Promise((resolve, reject) => {
        restaurantSchema.find({ restaurant_id: restaurant_id }, (err: string, restaurants: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve(restaurants);
            }
        });
    });
}

/**
 * Add one restaurant
 * @param body
 * @returns
 */
const postOneRestaurant = (body: any) => {
    const delivery = new restaurantSchema({
        restaurant_id :body.restaurant_id,
        restaurant_name:body.restaurant_name,
        picture:body.picture,
        schedules:body.schedules,
        estimated_average_delivery:body.estimated_average_delivery,
        means_of_payment_accepted:body.means_of_payment_accepted,
        articles:body.articles,
        menus:body.menus
    });

    return new Promise((resolve, reject) => {
        delivery.save((err: string, restaurant: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve(restaurant);
            }
        });
    });
};
const UpdateRestaurantWithRestaurantID = (restaurant_id:any, body: any) => {
    return new Promise((resolve, reject) => {
        restaurantSchema.updateOne({restaurant_id:restaurant_id},{
            restaurant_name:body.restaurant_name,
            picture:body.picture,
            schedules:body.schedules,
            estimated_average_delivery:body.estimated_average_delivery,
            means_of_payment_accepted:body.means_of_payment_accepted,
            articles:body.articles,
            menus:body.menus
        },(err: string, restaurants: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve( restaurantSchema.find({ restaurant_id: restaurant_id }, (err: string, restaurants: Array<any>) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(restaurants);
                    }
                }));
            }
        });
    });
};

/**
 * delete one restaurant
 * @param id
 * @returns
 */
function deleteRestaurant(id: string) {
    return new Promise((resolve, reject) => {
        restaurantSchema.deleteOne({ restaurant_id: id }, (err: string, orders: Array<any>) => {
            if (err) {
                reject(err);
            } else {
                resolve(orders);
            }
        });
    });
}

module.exports = {
    findAllRestaurant:findAllRestaurant,
    postOneRestaurant:postOneRestaurant,
    findRestaurantWithRestaurantID:findRestaurantWithRestaurantID,
    UpdateRestaurantWithRestaurantID:UpdateRestaurantWithRestaurantID,
    deleteRestaurant:deleteRestaurant
}