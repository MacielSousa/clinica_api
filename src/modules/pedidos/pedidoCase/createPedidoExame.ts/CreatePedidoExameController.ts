import {Response, Request} from "express";
import { container } from "tsyringe";
import { CreatePedidoExameUseCase } from "./CreatePedidoExameUseCase";


class CreatePedidoExameController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
        const { exames_id } = request.body;

        
        const createPedidoExameUseCase = container.resolve(CreatePedidoExameUseCase);

        
        const pedido = await createPedidoExameUseCase.execute({
            pedido_id: id,
            exames_id,
        });
        

        return response.json(pedido);
    }
}

export { CreatePedidoExameController }