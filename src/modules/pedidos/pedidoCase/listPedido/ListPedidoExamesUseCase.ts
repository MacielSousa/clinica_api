import { IPedidosRepository } from "@modules/pedidos/repositories/IPedidosRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ListPedidoExamesUseCase {
    constructor(
        @inject("PedidosRepository")
        private pedidosRepository: IPedidosRepository,
    ){}

    async execute(id: string){
        try {
            const pedido = await this.pedidosRepository.findById(id);
            return pedido;
        } catch (error) {
            return error;
        }
    }

}

export {ListPedidoExamesUseCase}