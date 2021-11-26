import express from "express";
import {Request, Response, NextFunction} from "express";
import * as bodyParser from "body-parser";
import {account} from "./routes/account";
const cors = require("cors");

class App {
  public app: express.Application;
  public routePrv: account = new account();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routesSQL(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(cors());
    this.app.use(function(req:Request, res:Response, next:NextFunction) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader(
          "Access-Control-Allow-Methods",
          "GET,HEAD,OPTIONS,POST,PUT,DELETE"
      );
      res.setHeader(
          "Access-Control-Allow-Headers",
          "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method"
      );
      if (req.method === "OPTIONS") {
        return res.status(200).end();
      }
      next();
    });
  }
}

export default new App().app;