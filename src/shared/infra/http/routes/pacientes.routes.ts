import { Router } from "express";
import { CreatePacienteController } from "@modules/pacientes/pacienteCase/createPaciente/CreatePacienteController";



const pacientesRoutes = Router();
const createUserController = new CreatePacienteController();


pacientesRoutes.post("/", createUserController.handle);

export { pacientesRoutes };