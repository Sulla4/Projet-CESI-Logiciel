"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkResultGet(restaurant, res) {
    if (restaurant.length == 0) {
        return res.status(404).json({ Error: "Data Not Found" });
    }
    else {
        return res.status(200).json({ restaurant: restaurant });
    }
}
function checkResultPostAndPut(restaurant, res) {
    if (restaurant.length == 0) {
        return res.status(404).json({ response: 'false', Error: "Data Not Found" });
    }
    else {
        return res.status(200).json({ response: 'true', restaurant: restaurant });
    }
}
function checkResultDelete(restaurant, res) {
    if (restaurant.length == 0) {
        return res.status(404).json({ response: 'false', Error: "Data Not Found" });
    }
    else {
        return res.status(200).json({ response: 'true', restaurant: restaurant });
    }
}
module.exports = {
    checkResultGet: checkResultGet,
    checkResultPostAndPut: checkResultPostAndPut,
    checkResultDelete: checkResultDelete
};
