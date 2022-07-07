import { ICreateSchedulerDTO } from "../../dtos/ICreateSchedulerDTO";
import { Scheduler } from "../../infra/typeorm/entities/Scheduler";
import { SchedulersRepository } from "../../infra/typeorm/repositories/SchedulersRepository";
import { ISchedulersRepository } from "../../repositories/ISchedulersRepository";

class CreateSchedulerUseCase {
    private schedulerRepository: ISchedulersRepository

    constructor () {
        this.schedulerRepository = new SchedulersRepository();
    }

    async execute (data: ICreateSchedulerDTO): Promise<Scheduler> {
        const user = await this.schedulerRepository.create(data)

        return user
    }
}

export { CreateSchedulerUseCase }