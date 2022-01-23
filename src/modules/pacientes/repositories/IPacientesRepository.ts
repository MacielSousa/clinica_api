
import { ICreatePacientesDTO } from "../dtos/ICreatePacientesDTO";
import { Paciente } from "../infra/typeorm/entities/Paciente";



interface IPacientesRepository {
    create(data: ICreatePacientesDTO): Promise<void>;
    findByCPF(cpf: number): Promise<Paciente>
    finByCodigo(codigo: number): Promise<Paciente>;
}

export { IPacientesRepository }