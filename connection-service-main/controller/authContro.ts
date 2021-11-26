import {NextFunction, Request, Response} from "express";
import jwt_decode from "jwt-decode";
var loggerCustom = require('../modules/logger');
const bcrypt = require('bcrypt');
const request = require('request-promise-native');
const { createJWT, checkJWT } = require('../modules/jwt')

function signIn (req : Request,res : Response,next : NextFunction){
    const userId = req.body.id;
    const userPWD = req.body.password;

    if(req.body.password==null || req.body.id==null){
        res.status(400).json({'error':'missing parameters'});
    }
    const uri = `http://localhost:3004/account/${userId}`;
    request(uri)
        .then((user:any) => {
            const parseUser = JSON.parse(user);
            if(bcrypt.compareSync(userPWD, parseUser.mpUser)){
                let token = createJWT({ name : parseUser.firstnameUser, role : parseUser.role_idRole,email: parseUser.email})
                res.status(200).json({'user' : JSON.parse(user),token : token})
            }
        })
        .catch((err: string) => res.status(404).json({Error : "Data Not Found" + err}));
}

function verifyToken (req : Request,res : Response,next : NextFunction) {
    //Recup le token + user dans le BDD
    let token:any =req.headers.token;
    token = token.replace("Bearer ","");
    let check = checkJWT(token);
    if(check == 'renew'){
        const decodedHeader : any = jwt_decode(token);
        const uri = `http://localhost:3004/account/${decodedHeader.user.email}`;
        request(uri)
            .then((user:any) => {
                const parseUser = JSON.parse(user);
                let tokenRenew = createJWT(decodedHeader.user)
                res.status(200).json({'user' : parseUser,token : tokenRenew})
            })
            .catch((err: string) => res.status(404).json({Error : "Data Not Found" + err}));
    }else if(check == false){
        loggerCustom.info('Bad token, token use : ' + token);
        return res.status(500).json({
            succes:false,
            message:'Token is not valid'
        })
    } else if (check.user.name){
        return res.status(200).json({token: token})
    }
}


module.exports={
    signIn:signIn,
    verifyToken:verifyToken
}