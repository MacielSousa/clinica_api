import { Request, Response} from "express";
import { container } from "tsyringe";
import { AllListPedidosUseCase } from "./AllListPedidosUseCase";

class AllListPedidosController {
    
   async handle(request: Request, response: Response): Promise<Response> {
        const allListPedidosUseCase = container.resolve(AllListPedidosUseCase);
        const pedidos = await allListPedidosUseCase.execute();
        return response.json(pedidos);
    }
}

export {AllListPedidosController}