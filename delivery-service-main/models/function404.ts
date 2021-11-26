import {Response} from "express";

function checkResultGet(restaurant : Array<any>, res:Response){
    if(restaurant.length == 0){
        return  res.status(404).json({Error: "Data Not Found"});
    }
    else{
        return res.status(200).json({ restaurant });
    }
}

function checkResultPostAndPut(restaurant : Array<any>, res:Response){
    if(restaurant.length == 0){
        return res.status(404).json({ response: 'false', Error: "Data Not Found" })
    }
    else{
        return res.status(200).json({ response: 'true', restaurant })
    }
}

function checkResultDelete(restaurant : Array<any>, res:Response){
    if(restaurant.length == 0){
        return res.status(404).json({ response: 'false', Error: "Data Not Found" })
    }
    else{
        return res.status(200).json({ response: 'true', restaurant })
    }
}

module.exports = {
    checkResultGet: checkResultGet,
    checkResultPostAndPut:checkResultPostAndPut,
    checkResultDelete:checkResultDelete
}