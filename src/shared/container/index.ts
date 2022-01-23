import { container } from "tsyringe";


import { PacientesRepository} from "@modules/pacientes/infra/typeorm/repositories/PacientesRepository";
import { IPacientesRepository } from "@modules/pacientes/repositories/IPacientesRepository";
import { IExamesRepository } from "@modules/exemes/repositories/IExamesRepository";
import { ExamesRepository } from "@modules/exemes/infra/typeorm/repositories/ExamesRepository";
import { IPedidosRepository } from "@modules/pedidos/repositories/IPedidosRepository";
import { PedidosRepository } from "@modules/pedidos/infra/typeorm/repositories/PedidosRepository";



container.registerSingleton<IPacientesRepository>(
    "PacientesRepository",
    PacientesRepository
)


container.registerSingleton<IExamesRepository>(
    "ExamesRepository",
    ExamesRepository
)


container.registerSingleton<IPedidosRepository>(
    "PedidosRepository",
     PedidosRepository
)