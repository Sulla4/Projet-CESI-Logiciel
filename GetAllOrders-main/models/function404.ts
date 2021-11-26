import {Response} from "express";

function checkResultGet(order : Array<any>, res:Response){
    if(order.length == 0){
        return  res.status(404).json({Error: "Data Not Found"});
    }
    else{
        return res.status(200).json({ order });
    }
}

function checkResultPostAndPut(order : Array<any>, res:Response){
    if(order.length == 0){
        return res.status(404).json({ response: 'false', Error: "Data Not Found" })
    }
    else{
        return res.status(200).json({ response: 'true', order })
    }
}

function checkResultDelete(order : Array<any>, res:Response){
    if(order.length == 0){
        return res.status(404).json({ response: 'false', Error: "Data Not Found" })
    }
    else{
        return res.status(200).json({ response: 'true', order })
    }
}

module.exports = {
    checkResultGet: checkResultGet,
    checkResultPostAndPut:checkResultPostAndPut,
    checkResultDelete:checkResultDelete
}