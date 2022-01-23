import { IExamesRepository } from "@modules/exemes/repositories/IExamesRepository";
import { IPacientesRepository } from "@modules/pacientes/repositories/IPacientesRepository";
import { Pedido } from "@modules/pedidos/infra/typeorm/entities/Pedido";
import { IPedidosRepository } from "@modules/pedidos/repositories/IPedidosRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest{
    id: string;
    paciente_id: number;
    exames_id: string[];
}

@injectable()
class CreatePedidoUseCase {
    constructor(
        @inject("PedidosRepository")
        private pedidosRepository: IPedidosRepository,
        @inject("PacientesRepository")
        private pacienteRepository: IPacientesRepository,
        @inject("ExamesRepository")
        private exameRepository: IExamesRepository
    ){}

    async execute( {id, paciente_id, exames_id}:IRequest): Promise<Pedido>{

        try {
            const paciente = await this.pacienteRepository.finByCodigo(paciente_id);
            if(!paciente){
                throw new AppError("Paciente não encontrado!");
            }


            const exames = await this.exameRepository.findByIds(exames_id);

            if(exames.length < 2){
                throw new AppError("Pedido de Exame precisa conter dois ou mais exames!");
            }

            const pedido = await this.pedidosRepository.create({id, paciente_id, exames});

            const codigo = btoa(pedido.id)+''+pedido.ordemServico;

            await this.pedidosRepository.alterCodPrdido(pedido.id, codigo);

            pedido.codigo = codigo;

            return pedido;
        } catch (error) {
            return error;
        }
    }
}

export {CreatePedidoUseCase}