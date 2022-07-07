import { ICreateSchedulerDTO } from "../dtos/ICreateSchedulerDTO"
import { Scheduler } from "../infra/typeorm/entities/Scheduler"

interface ISchedulersRepository {
    create(data: ICreateSchedulerDTO): Promise<Scheduler>;
}

export { ISchedulersRepository }