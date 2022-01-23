import { AllListPedidosController } from "@modules/pedidos/pedidoCase/allListPedidos/AllListPedidosController";
import { CeatePedidoUseControlle } from "@modules/pedidos/pedidoCase/createPedido/CeatePedidoUseControlle";
import { CreatePedidoExameController } from "@modules/pedidos/pedidoCase/createPedidoExame.ts/CreatePedidoExameController";
import { ListCategoriesController } from "@modules/pedidos/pedidoCase/listPedido/ListPedidoExamesController";
import { Router } from "express";




const pedidosRoutes = Router();
const allListPedidosController = new AllListPedidosController();
const ceatePedidoUseControlle = new CeatePedidoUseControlle();
const createPedidoExameUseCase = new CreatePedidoExameController();
const listCategoriesController = new ListCategoriesController();

pedidosRoutes.post("/", ceatePedidoUseControlle.handle);
pedidosRoutes.get("/", allListPedidosController.handle);
pedidosRoutes.post("/exames/:id", createPedidoExameUseCase.handle);



export {pedidosRoutes}