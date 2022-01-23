import { ICreatePedidoDTO } from "../dtos/ICreatePedidoDTO";
import { Pedido } from "../infra/typeorm/entities/Pedido";


interface IPedidosRepository {
   create(data: ICreatePedidoDTO): Promise<Pedido>;
   findByCodigo(codigo: string): Promise<Pedido>;
   findById(id: string): Promise<Pedido>;
   alterCodPrdido(id: string, codigo: string): Promise<void>;
   findAll(): Promise<Pedido[]>
}


export {IPedidosRepository}


