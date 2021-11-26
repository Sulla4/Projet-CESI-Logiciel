"use strict";
var restaurantSchema = require('../schema/restaurant');
/**
 * Get all delivery
 * @returns
 */
function findAllRestaurant() {
    return new Promise(function (resolve, reject) {
        restaurantSchema.find(function (err, restaurants) {
            if (err) {
                reject(err);
            }
            else {
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
function findRestaurantWithRestaurantID(restaurant_id) {
    return new Promise(function (resolve, reject) {
        restaurantSchema.find({ restaurant_id: restaurant_id }, function (err, restaurants) {
            if (err) {
                reject(err);
            }
            else {
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
var postOneRestaurant = function (body) {
    var delivery = new restaurantSchema({
        restaurant_id: body.restaurant_id,
        restaurant_name: body.restaurant_name,
        picture: body.picture,
        schedules: body.schedules,
        estimated_average_delivery: body.estimated_average_delivery,
        means_of_payment_accepted: body.means_of_payment_accepted,
        articles: body.articles,
        menus: body.menus
    });
    return new Promise(function (resolve, reject) {
        delivery.save(function (err, restaurant) {
            if (err) {
                reject(err);
            }
            else {
                resolve(restaurant);
            }
        });
    });
};
var UpdateRestaurantWithRestaurantID = function (restaurant_id, body) {
    return new Promise(function (resolve, reject) {
        restaurantSchema.updateOne({ restaurant_id: restaurant_id }, {
            restaurant_name: body.restaurant_name,
            picture: body.picture,
            schedules: body.schedules,
            estimated_average_delivery: body.estimated_average_delivery,
            means_of_payment_accepted: body.means_of_payment_accepted,
            articles: body.articles,
            menus: body.menus
        }, function (err, restaurants) {
            if (err) {
                reject(err);
            }
            else {
                resolve(restaurantSchema.find({ restaurant_id: restaurant_id }, function (err, restaurants) {
                    if (err) {
                        reject(err);
                    }
                    else {
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
function deleteRestaurant(id) {
    return new Promise(function (resolve, reject) {
        restaurantSchema.deleteOne({ restaurant_id: id }, function (err, orders) {
            if (err) {
                reject(err);
            }
            else {
                resolve(orders);
            }
        });
    });
}
module.exports = {
    findAllRestaurant: findAllRestaurant,
    postOneRestaurant: postOneRestaurant,
    findRestaurantWithRestaurantID: findRestaurantWithRestaurantID,
    UpdateRestaurantWithRestaurantID: UpdateRestaurantWithRestaurantID,
    deleteRestaurant: deleteRestaurant
};
