var jwt = require('jsonwebtoken');

const createJWT = (user : String) => {
    let token = jwt.sign({ user : user},
        process.env.JWT_SECRET,
        {expiresIn : '1h'});
    return "Bearer "+token;
}

const checkJWT = (token : String) => {
    let check : any = false;
    try{
        check = jwt.verify(token, process.env.JWT_SECRET);
    }catch( err ){
        if (err.name == 'TokenExpiredError'){
            check='renew';
        }else {
            check = false;
        }
    }
    return check;
}

module.exports = {createJWT : createJWT, checkJWT : checkJWT}
