import { Router } from "express";
import todoController from "../controllers/todoController";

const router: Router = Router();

router.route("/").get(todoController.getTodos);

router.route("/:id").get(todoController.getTodo);

export default router;
