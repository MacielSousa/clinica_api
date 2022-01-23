import { Request, Response} from "express";
import { container } from "tsyringe";
import { ListPedidoExamesUseCase } from "./ListPedidoExamesUseCase";

class ListCategoriesController {
    
   async handle(request: Request, response: Response): Promise<Response> {
       const {id} = request.params;
        const listPedidoExamesUseCase = container.resolve(ListPedidoExamesUseCase);
        const pedido = await listPedidoExamesUseCase.execute(id);
        return response.json(pedido);
    }
}

export {ListCategoriesController}