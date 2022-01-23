import {Response, Request} from "express";
import { container } from "tsyringe";

import { CreatePacienteUseCase } from "./CreatPacienteUseCase";

class CreatePacienteController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {name, sexo, cpf} = request.body;

        const createPacienteUseCase = container.resolve(CreatePacienteUseCase);

        await createPacienteUseCase.execute({name, sexo, cpf});

        return response.status(201).send();
    }
}

export {CreatePacienteController}