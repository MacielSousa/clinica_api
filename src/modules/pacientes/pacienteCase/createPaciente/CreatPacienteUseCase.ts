import { inject, injectable } from "tsyringe";


import { AppError } from "@shared/errors/AppError";
import { ICreatePacientesDTO } from "@modules/pacientes/dtos/ICreatePacientesDTO";
import { IPacientesRepository } from "@modules/pacientes/repositories/IPacientesRepository";



@injectable()
class CreatePacienteUseCase {

    constructor(
        @inject("PacientesRepository")
        private pacienteRepository: IPacientesRepository
    ){}
    async execute({name, sexo, cpf}: ICreatePacientesDTO): Promise<void> {

      try {
        
        const pacienteAlreadyExists = await this.pacienteRepository.findByCPF(cpf);

        if(pacienteAlreadyExists){
          throw new AppError("Paciente already exists");
        }

        this.pacienteRepository.create({name, sexo, cpf});

      } catch (error) {
        return error;
      }

    }
}

export {CreatePacienteUseCase}