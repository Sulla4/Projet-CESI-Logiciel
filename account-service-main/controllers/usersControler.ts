import {Request, Response} from "express";
import {User, UserInterface} from "../models/user";
const bcrypt = require('bcrypt');
import {UpdateOptions,DestroyOptions} from "sequelize";
const request = require('request-promise-native');

export class UsersControler {
    //Find All User
    public findAllUser(req: Request, res: Response) {
        User.findAll<User>({})
            .then((user: Array<User>) => res.json(user))
            .catch((err: Error) => res.status(500).json("Internal error, Please retry later"));
    }

    //Find One User with Email
    public findUserWithEmail(req: Request, res: Response) {
        const userEmail: string = req.params.id;
        User.findOne({ where: { email: userEmail } })
            .then((user: User | null) => {
                if (user) {
                    res.json(user);
                } else {
                    res.status(404).json({errors: ["User not found"]});
                }
            })
            .catch((err: Error) => res.status(500).json("Internal error, Please retry later"));
    }

    //Create One User
    public createUser(req: Request, res: Response){
        if(req.body.siretUser != null && req.body.siretUser!=0){
            req.body.role_idRole = "Restaurateur"
        }
        req.body.mpUser = bcrypt.hashSync(req.body.mpUser,1);
        const params: UserInterface = req.body;

        User.create<User>(params)
            .then((user: User) => {
                return res.status(201).json(user)
            })
            .catch((err: Error) => {
                return res.status(500).json("Internal error, Please retry later")
            });
    }

    //Update One User
    public updateUser(req: Request, res: Response) {
        //Call API Token
        if (req.body.mpUser == null || req.body.email == null || req.body.role_idRole == null || req.headers.token == null) {
            res.status(404).json({'error': 'missing parameters'});
        } else {

            var clientServerOptions = {
                uri: `http://localhost:3005/auth/verify/`,
                body: JSON.stringify(req.body),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token : req.headers.token
                }
            }
            request(clientServerOptions, function (error: Error, response: any) {
                if (response.statusCode == 200) {
                    const dataJson = JSON.parse(response.body);
                    const tokenrecup = dataJson.token

                    const email: string = req.params.id;
                    const params: UserInterface = req.body;
                    const update: UpdateOptions = {
                        where: {email: email},
                        limit: 10,
                    };
                    User.findOne({ where: { email: req.body.email} })
                        .then((user: User | null) => {
                            if (user) {
                                if(!bcrypt.compareSync(req.body.mpUser, user.mpUser)){
                                    req.body.mpUser = bcrypt.hashSync(req.body.mpUser,1);
                                }
                                User.update(params, update)
                                    .then(() => res.status(202).json({data: req.body, token :tokenrecup}))
                                    .catch((err: Error) => res.status(404).json("User not found"));
                            } else {
                                const msg = JSON.parse(response.body)
                                return res.status(response.statusCode).json(msg.message);
                            }
                        })
                        .catch((err: Error) => res.status(500).json("Internal error, Please retry later"));
                } else {
                    res.status(500).json("Internal error, Please retry later");
                }
            });
        }
    }

    //Delete One User
    public deleteUser(req: Request, res: Response) {
        const userId: string = req.params.id;
        const options: DestroyOptions = {
            where: {idUser: userId},
            limit: 1,
        };

        User.destroy(options)
            .then(() => res.status(202).json({data: "success Profil delete"}))
            .catch((err: Error) => res.status(500).json("Internal error, PLease retry later"));
    }
}