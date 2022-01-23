import { IPedidosRepository } from "@modules/pedidos/repositories/IPedidosRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class AllListPedidosUseCase {

    constructor(
        @inject("PedidosRepository")
        private pedidosRepository: IPedidosRepository,
    ){}
    async execute(){
        try {
            const pedidos = await this.pedidosRepository.findAll();
            return pedidos;
        } catch (error) {
            return error;
        }
    }

}

export {AllListPedidosUseCase}