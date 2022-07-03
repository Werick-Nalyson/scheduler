import { ICreateUserDTO } from "src/modules/users/dtos/ICreateUserDTO";
import { IUsersRepository } from "src/modules/users/repositories/IUsersRepository";
import { User } from "src/modules/users/infra/typeorm/entities/User";
import { getRepository, Repository } from "typeorm";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor () {
        this.repository = getRepository(User)
    }

    async create ({
        name,
        email,
        telephone,
        isWhatsapp,
    }: ICreateUserDTO): Promise<User | User[]> {
        const createUser = this.repository.create({
            name,
            email,
            telephone,
            isWhatsapp,
        })
        
        const user = await this.repository.save(createUser)

        return user;
    }
}

export { UsersRepository }