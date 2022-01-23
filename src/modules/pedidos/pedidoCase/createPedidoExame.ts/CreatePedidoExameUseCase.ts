import { IExamesRepository } from "@modules/exemes/repositories/IExamesRepository";
import { IPedidosRepository } from "@modules/pedidos/repositories/IPedidosRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    pedido_id: string;
    exames_id: string[];
}

@injectable()
class CreatePedidoExameUseCase{
    constructor(
        @inject("PedidosRepository")
        private pedidosRepository: IPedidosRepository,
        @inject("ExamesRepository")
        private exameRepository: IExamesRepository
    ){}
   async execute({pedido_id, exames_id}: IRequest): Promise<void>{
       const pedido = await this.pedidosRepository.findById(pedido_id);

       if(!pedido){
           throw new AppError("Pedido de exame não encontrado!");
       }

       const exames = await this.exameRepository.findByIds(exames_id);

       pedido.exames = exames;

      await this.pedidosRepository.create(pedido);
    
      
   }
}

export {CreatePedidoExameUseCase}