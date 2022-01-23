import { ICreatePedidoDTO } from "@modules/pedidos/dtos/ICreatePedidoDTO";
import { IPedidosRepository } from "@modules/pedidos/repositories/IPedidosRepository";
import { getRepository, Repository } from "typeorm";
import { Pedido } from "../entities/Pedido";


class PedidosRepository implements IPedidosRepository {
    private repository: Repository<Pedido>

    constructor(){
        this.repository = getRepository(Pedido);
    }

    async create ({id, codigo, paciente_id, ordemServico, exames}: ICreatePedidoDTO): Promise<Pedido> {
        const pedido = await this.repository.create({
            id,
            paciente_id,
            codigo,
            ordemServico,
            exames
        });

        await this.repository.save(pedido);
        return pedido;
    }

    async findByCodigo(codigo: string): Promise<Pedido>{
        const pedido = await this.repository.findOne({codigo});
        return pedido;
    }

    async findById(id: string): Promise<Pedido> {
        const pedido = await this.repository.findOne({id});
        return pedido;
    }

   async alterCodPrdido(id: string, codigo: string): Promise<void> {
        await this.repository.createQueryBuilder()
            .update()
            .set({codigo})
            .where("id = :id").setParameters({ id })
            .execute()
    }

    async findAll(): Promise<Pedido[]> {
        const pedidos = await this.repository.find();
        return pedidos;
    }

}


export {PedidosRepository}