import { Router } from "express";
import todoController from "../controllers/todoController";

const router: Router = Router();

router.route("/").get(todoController.getTodos).post(todoController.createTodo);

router
  .route("/:id")
  .get(todoController.getTodo)
  .patch(todoController.completeTodo)
  .delete(todoController.deleteTodo);

router.route("/:id/complete").patch(todoController.editTodo);

export default router;
