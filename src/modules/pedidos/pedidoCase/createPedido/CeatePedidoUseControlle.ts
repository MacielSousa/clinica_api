import {Response, Request} from "express";
import { container } from "tsyringe";
import { CreatePedidoUseCase } from "./CreatePedidoUseCase";


class CeatePedidoUseControlle {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id, paciente_id, exames_id} = request.body;

        const createPedidoUseCase = container.resolve(CreatePedidoUseCase);

        await createPedidoUseCase.execute({id, paciente_id, exames_id});

        return response.status(201).send();
    }
}

export {CeatePedidoUseControlle}