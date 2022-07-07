import { Request, Response } from "express";
import { ICreateSchedulerDTO } from "../../dtos/ICreateSchedulerDTO";
import { CreateSchedulerUseCase } from "./CreateSchedulerUseCase";

class CreateSchedulerController {
    async handle (request: Request, response: Response): Promise<Response> {
        const {
            date,
            status,
            userId
        } = request.body as ICreateSchedulerDTO;

        const createSchedulerUseCase = new CreateSchedulerUseCase()

        const scheduler = await createSchedulerUseCase.execute({
            date,
            status,
            userId
        })
        
        return response.json(scheduler)
    }
}

export { CreateSchedulerController }