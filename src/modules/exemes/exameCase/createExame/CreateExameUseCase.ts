import { ICreateExamesDTO } from "@modules/exemes/dtos/ICreateExamesDTO";
import { IExamesRepository } from "@modules/exemes/repositories/IExamesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";



@injectable()
class CreateExameUseCase {
    constructor(
        @inject("ExamesRepository")
        private exameRepository: IExamesRepository
    ){}

    async execute({name, description}: ICreateExamesDTO): Promise<void> {
        try {
            const pacienteAlreadyExists = await this.exameRepository.findByName(name);
      
            if(pacienteAlreadyExists){
              throw new AppError("Exame already exists");
            }
      
            this.exameRepository.create({name, description});
        } catch (error) {
          return error
        }
      }
}

export { CreateExameUseCase }