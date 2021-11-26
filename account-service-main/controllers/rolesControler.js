"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesController = void 0;
const role_1 = require("../models/role");
class RolesController {
    findAllRoles(_req, res) {
        role_1.Role.findAll({})
            .then((links) => res.json(links))
            .catch((err) => res.status(500).json(err));
    }
    createOneRoles(req, res) {
        const params = req.body;
        role_1.Role.create(params)
            .then((link) => res.status(201).json(link))
            .catch((err) => res.status(500).json(err));
    }
    findOneRoles(req, res) {
        const linkId = req.params.id;
        role_1.Role.findByPk(linkId)
            .then((link) => {
            if (link) {
                res.json(link);
            }
            else {
                res.status(404).json({ errors: ["Link not found"] });
            }
        })
            .catch((err) => res.status(500).json(err));
    }
    updateRole(req, res) {
        const linkId = req.params.id;
        const params = req.body;
        const options = {
            where: { id: linkId },
            limit: 1,
        };
        role_1.Role.update(params, options)
            .then(() => res.status(202).json({ data: "success" }))
            .catch((err) => res.status(500).json(err));
    }
    deleteRole(req, res) {
        const linkId = req.params.id;
        const options = {
            where: { id: linkId },
            limit: 1,
        };
        role_1.Role.destroy(options)
            .then(() => res.status(204).json({ data: "success" }))
            .catch((err) => res.status(500).json(err));
    }
}
exports.RolesController = RolesController;
