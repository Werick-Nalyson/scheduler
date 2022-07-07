import { Router } from "express";
import { CreateSchedulerController } from "../modules/schedules/useCases/createScheduler/CreateSchedulerController";

const createSchedulerController = new CreateSchedulerController();

const schedulersRoutes = Router();

schedulersRoutes.post('/', createSchedulerController.handle);

export { schedulersRoutes }