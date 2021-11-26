"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesController = void 0;
const city_1 = require("../models/city");
class CitiesController {
    findAllCities(_req, res) {
        city_1.City.findAll({})
            .then((cities) => res.json(cities))
            .catch((err) => res.status(500).json(err));
    }
    createOneCity(req, res) {
        const params = req.body;
        city_1.City.create(params)
            .then((city) => res.status(201).json(city))
            .catch((err) => res.status(500).json(err));
    }
    findOneCity(req, res) {
        const cityId = req.params.id;
        city_1.City.findByPk(cityId)
            .then((city) => {
            if (city) {
                res.json(city);
            }
            else {
                res.status(404).json({ errors: ["Link not found"] });
            }
        })
            .catch((err) => res.status(500).json(err));
    }
    updateCity(req, res) {
        const cityId = req.params.id;
        const params = req.body;
        const options = {
            where: { id: cityId },
            limit: 1,
        };
        city_1.City.update(params, options)
            .then(() => res.status(202).json({ data: "success" }))
            .catch((err) => res.status(500).json(err));
    }
    deleteCity(req, res) {
        const cityId = req.params.id;
        const options = {
            where: { id: cityId },
            limit: 1,
        };
        city_1.City.destroy(options)
            .then(() => res.status(204).json({ data: "success" }))
            .catch((err) => res.status(500).json(err));
    }
}
exports.CitiesController = CitiesController;
