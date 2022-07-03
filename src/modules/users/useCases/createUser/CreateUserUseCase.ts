import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepository } from "../../infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
    private userRepository: IUsersRepository

    constructor () {
        this.userRepository = new UsersRepository();
    }

    async execute(data: ICreateUserDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email)

        if (userAlreadyExists) {
            throw new Error('O usuário já existe.')
        }
        
        const user = await this.userRepository.create(data)
        
        return user
    }
}

export { CreateUserUseCase }