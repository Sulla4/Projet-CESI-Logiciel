"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account = void 0;
const usersControler_1 = require("../controllers/usersControler");
const rolesControler_1 = require("../controllers/rolesControler");
const citiesController_1 = require("../controllers/citiesController");
class account {
    constructor() {
        this.usersController = new usersControler_1.UsersControler();
        this.rolesController = new rolesControler_1.RolesController();
        this.citiesController = new citiesController_1.CitiesController();
    }
    routesSQL(app) {
        app.route('/account')
            //.get(this.usersController.findAllUser)
            .post(this.usersController.createUser);
        app.route('/account/:id')
            .get(this.usersController.findUserWithEmail)
            .put(this.usersController.updateUser);
        //.delete(this.usersController.deleteUser);
        app.route("/role")
            .get(this.rolesController.findAllRoles);
        //.post(this.rolesController.createOneRoles);
        //app.route("/role/:id")
        //.get(this.rolesController.findOneRoles);
        //.put(this.rolesController.updateRole)
        //.delete(this.rolesController.deleteRole);
        app.route("/city")
            .get(this.citiesController.findAllCities);
        //.post(this.citiesController.createOneCity);
        app.route("/city/:id")
            .get(this.citiesController.findOneCity);
        //.put(this.citiesController.updateCity)
        //.delete(this.citiesController.deleteCity);
    }
}
exports.account = account;
