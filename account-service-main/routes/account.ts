import {UsersControler} from "../controllers/usersControler";
import {RolesController} from "../controllers/rolesControler";
import {CitiesController} from "../controllers/citiesController";

export class account {
public usersController: UsersControler = new UsersControler();
public rolesController: RolesController = new RolesController();
public citiesController:CitiesController= new CitiesController();

public routesSQL(app:any){
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