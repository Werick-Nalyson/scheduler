import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../users.entity";

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User | User[]>;
}

export { IUsersRepository }