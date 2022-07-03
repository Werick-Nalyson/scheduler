import { ICreateUserDTO } from "src/modules/users/dtos/ICreateUserDTO";
import { IUsersRepository } from "src/modules/users/repositories/IUsersRepository";
import { User } from "../entities/User";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../config/typeorm.config";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor () {
        this.repository = AppDataSource.getRepository(User)
    }

    async create ({
        name,
        email,
        telephone,
        isWhatsapp,
        active
    }: ICreateUserDTO): Promise<User> {
        const createUser = this.repository.create({
            name,
            email,
            telephone,
            isWhatsapp,
            active
        })
        
        const user = await this.repository.save(createUser)

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        return this.repository.findOne({
            where: {
                email
            }
        });
    }
}

export { UsersRepository }