"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkResultGet(order, res) {
    if (order.length == 0) {
        return res.status(404).json({ Error: "Data Not Found" });
    }
    else {
        return res.status(200).json({ order: order });
    }
}
function checkResultPostAndPut(order, res) {
    if (order.length == 0) {
        return res.status(404).json({ response: 'false', Error: "Data Not Found" });
    }
    else {
        return res.status(200).json({ response: 'true', order: order });
    }
}
function checkResultDelete(order, res) {
    if (order.length == 0) {
        return res.status(404).json({ response: 'false', Error: "Data Not Found" });
    }
    else {
        return res.status(200).json({ response: 'true', order: order });
    }
}
module.exports = {
    checkResultGet: checkResultGet,
    checkResultPostAndPut: checkResultPostAndPut,
    checkResultDelete: checkResultDelete
};
