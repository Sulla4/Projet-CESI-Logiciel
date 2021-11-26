import {Request, Response} from "express";
import {Role, RolesInterface} from "../models/role";
import {UpdateOptions, DestroyOptions} from "sequelize";

export class RolesController {
    public findAllRoles(_req: Request, res: Response) {
        Role.findAll<Role>({})
            .then((links: Array<Role>) => res.status(200).json(links))
            .catch((err: Error) => res.status(500).json(err));
    }

    public createOneRoles(req: Request, res: Response) {
        const params: RolesInterface = req.body;

        Role.create<Role>(params)
            .then((link: Role) => res.status(201).json(link))
            .catch((err: Error) => res.status(500).json(err));
    }

    public findOneRoles(req: Request, res: Response) {
        const linkId: string = req.params.id;

        Role.findByPk<Role>(linkId)
            .then((link: Role | null) => {
                if (link) {
                    res.json(link);
                } else {
                    res.status(404).json({errors: ["Link not found"]});
                }
            })
            .catch((err: Error) => res.status(500).json(err));
    }

    public updateRole(req: Request, res: Response) {
        const linkId: string = req.params.id;
        const params: RolesInterface = req.body;

        const options: UpdateOptions = {
            where: {id: linkId},
            limit: 1,
        };

        Role.update(params, options)
            .then(() => res.status(202).json({data: "success"}))
            .catch((err: Error) => res.status(500).json(err));
    }

    public deleteRole(req: Request, res: Response) {
        const linkId: string = req.params.id;
        const options: DestroyOptions = {
            where: {id: linkId},
            limit: 1,
        };

        Role.destroy(options)
            .then(() => res.status(204).json({data: "success"}))
            .catch((err: Error) => res.status(500).json(err));
    }
}