"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersControler = void 0;
const user_1 = require("../models/user");
const bcrypt = require('bcrypt');
const request = require('request-promise-native');
class UsersControler {
    //Find All User
    findAllUser(req, res) {
        user_1.User.findAll({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    }
    //Find One User with Email
    findUserWithEmail(req, res) {
        const userEmail = req.params.id;
        user_1.User.findOne({ where: { email: userEmail } })
            .then((user) => {
            if (user) {
                res.json(user);
            }
            else {
                res.status(404).json({ errors: ["User not found"] });
            }
        })
            .catch((err) => res.status(500).json(err));
    }
    //Create One User
    createUser(req, res) {
        console.log(req.body);
        if (req.body.siretUser != null && req.body.siretUser != 0) {
            req.body.role_idRole = "Restaurateur";
        }
        req.body.mpUser = bcrypt.hashSync(req.body.mpUser, 1);
        const params = req.body;
        user_1.User.create(params)
            .then((user) => {
            //console.log(user)
            return res.status(201).json(user);
        })
            .catch((err) => {
            return res.status(500).json(err);
        });
    }
    //Update One User
    updateUser(req, res) {
        //Call API Token
        if (req.body.mpUser == null || req.body.email == null || req.body.role_idRole == null || req.headers.token == null) {
            res.status(404).json({ 'error': 'missing parameters' });
        }
        else {
            var clientServerOptions = {
                uri: `http://localhost:3005/auth/verify/`,
                body: JSON.stringify(req.body),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: req.headers.token
                }
            };
            request(clientServerOptions, function (error, response) {
                if (response.statusCode == 200) {
                    const dataJson = JSON.parse(response.body);
                    const tokenrecup = dataJson.token;
                    const email = req.params.id;
                    const params = req.body;
                    const update = {
                        where: { email: email },
                        limit: 10,
                    };
                    user_1.User.findOne({ where: { email: req.body.email } })
                        .then((user) => {
                        if (user) {
                            if (!bcrypt.compareSync(req.body.mpUser, user.mpUser)) {
                                req.body.mpUser = bcrypt.hashSync(req.body.mpUser, 1);
                            }
                            user_1.User.update(params, update)
                                .then(() => res.status(202).json({ data: req.body, token: tokenrecup }))
                                .catch((err) => res.status(404).json("User not found"));
                        }
                        else {
                            const msg = JSON.parse(response.body);
                            return res.status(response.statusCode).json(msg.message);
                        }
                    })
                        .catch((err) => res.status(500).json(err));
                }
                else {
                    res.status(500).json(error);
                }
            });
        }
    }
    //Delete One User
    deleteUser(req, res) {
        const userId = req.params.id;
        const options = {
            where: { idUser: userId },
            limit: 1,
        };
        user_1.User.destroy(options)
            .then(() => res.status(202).json({ data: "success Profil delete" }))
            .catch((err) => res.status(500).json(err));
    }
}
exports.UsersControler = UsersControler;
