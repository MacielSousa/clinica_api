import { Exame } from "@modules/exemes/infra/typeorm/entities/Exame";



class ICreatePedidoDTO {
    id: string;
    codigo?: string;
    ordemServico?: number;
    paciente_id: number;
    exames?: Exame[];
}


export { ICreatePedidoDTO }