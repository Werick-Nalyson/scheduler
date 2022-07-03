import { Request, Response } from "express";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            email,
            isWhatsapp,
            telephone
        } = request.body as ICreateUserDTO;
    
        const createUserUseCase = new CreateUserUseCase()
    
        const user = await createUserUseCase.execute({
            name,
            email,
            isWhatsapp,
            telephone
        });
    
        return response.status(201).json(user);
      }
}

export { CreateUserController }