import {Request, Response} from "express";
import {City, CitiesInterface} from "../models/city";
import {UpdateOptions, DestroyOptions} from "sequelize";

export class CitiesController {
    public findAllCities(_req: Request, res: Response) {
        City.findAll<City>({})
            .then((cities: Array<City>) => res.status(200).json(cities))
            .catch((err: Error) => res.status(500).json("Internal error, PLease retry later"));
    }

    public createOneCity(req: Request, res: Response) {
        const params: CitiesInterface = req.body;

        City.create<City>(params)
            .then((city: City) => res.status(201).json(city))
            .catch((err: Error) => res.status(500).json("Internal error, PLease retry later"));
    }

    public findOneCity(req: Request, res: Response) {
        const cityId: string = req.params.id;

        City.findByPk<City>(cityId)
            .then((city: City | null) => {
                if (city) {
                    res.json(city);
                } else {
                    res.status(404).json({errors: ["Link not found"]});
                }
            })
            .catch((err: Error) => res.status(500).json("Internal error, PLease retry later"));
    }

    public updateCity(req: Request, res: Response) {
        const cityId: string = req.params.id;
        const params: CitiesInterface = req.body;

        const options: UpdateOptions = {
            where: {id: cityId},
            limit: 1,
        };

        City.update(params, options)
            .then(() => res.status(202).json({data: "success"}))
            .catch((err: Error) => res.status(500).json("Internal error, PLease retry later"));
    }

    public deleteCity(req: Request, res: Response) {
        const cityId: string = req.params.id;
        const options: DestroyOptions = {
            where: {id: cityId},
            limit: 1,
        };

        City.destroy(options)
            .then(() => res.status(204).json({data: "success"}))
            .catch((err: Error) => res.status(500).json("Internal error, PLease retry later"));
    }
}