import { Router } from "express";
import { examesRoutes } from "./exames.routes";
import { pacientesRoutes } from "./pacientes.routes";
import { pedidosRoutes } from "./pedidos.routes";


const router = Router();



router.use("/pacientes", pacientesRoutes);
router.use("/exames", examesRoutes);
router.use("/pedidos", pedidosRoutes);


export { router }