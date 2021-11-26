"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkResultGet(delivery, res) {
    if (delivery.length == 0) {
        return res.status(404).json({ Error: "Data Not Found" });
    }
    else {
        return res.status(200).json({ delivery });
    }
}
function checkResultPostAndPut(delivery, res) {
    if (delivery.length == 0) {
        return res.status(404).json({ response: 'false', Error: "Data Not Found" });
    }
    else {
        return res.status(200).json({ response: 'true', delivery });
    }
}
function checkResultDelete(delivery, res) {
    if (delivery.length == 0) {
        return res.status(404).json({ response: 'false', Error: "Data Not Found" });
    }
    else {
        return res.status(200).json({ response: 'true', delivery });
    }
}
module.exports = {
    checkResultGet: checkResultGet,
    checkResultPostAndPut: checkResultPostAndPut,
    checkResultDelete: checkResultDelete
};
