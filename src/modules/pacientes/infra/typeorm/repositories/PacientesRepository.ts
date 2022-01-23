import { ICreatePacientesDTO } from "@modules/pacientes/dtos/ICreatePacientesDTO";
import { IPacientesRepository } from "@modules/pacientes/repositories/IPacientesRepository";

import { getRepository, Repository } from "typeorm";
import { Paciente} from "../entities/Paciente";




class PacientesRepository implements IPacientesRepository{
    private repository: Repository<Paciente>;

    constructor() {
        this.repository = getRepository(Paciente);
    }
    

    async create({name, sexo, cpf, codigo}: ICreatePacientesDTO): Promise<void> {
        const paciente = this.repository.create({
            name,
            sexo,
            cpf,
            codigo
        });

        await this.repository.save(paciente);
    }

    async findByCPF(cpf: number): Promise<Paciente> {
        const paciente = await this.repository.findOne({cpf});
        return paciente;
    }

   async finByCodigo(codigo: number): Promise<Paciente> {
        const paciente = await this.repository.findOne({codigo});
        return paciente;
    }
    
}

export { PacientesRepository }