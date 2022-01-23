import { CreateExameController } from "@modules/exemes/exameCase/createExame/CreateExameController";
import { Router } from "express";


const examesRoutes = Router();

const createExameController = new CreateExameController();


examesRoutes.post("/", createExameController.handle);


export {examesRoutes}