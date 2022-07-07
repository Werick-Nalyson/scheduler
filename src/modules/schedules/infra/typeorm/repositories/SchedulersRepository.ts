import { ICreateSchedulerDTO } from "../../../../schedules/dtos/ICreateSchedulerDTO";
import { ISchedulersRepository } from "../../../../schedules/repositories/ISchedulersRepository";
import { Repository } from "typeorm";
import { Scheduler } from "../entities/Scheduler";
import { AppDataSource } from "../../../../../config/typeorm.config";

class SchedulersRepository implements ISchedulersRepository {
    private schedulersRepository: Repository<Scheduler>;

    constructor () {
        this.schedulersRepository = AppDataSource.getRepository(Scheduler)
    }
    
    async create ({
        date,
        status,
        userId
    }: ICreateSchedulerDTO): Promise<Scheduler> {
        const createScheduler = this.schedulersRepository.create({
            date,
            status,
            userId
        });

        const scheduler = await this.schedulersRepository.save(createScheduler)

        return scheduler
    }
}

export { SchedulersRepository }