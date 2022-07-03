interface ICreateUserDTO {
    id?: string;
    name: string;
    email: string;
    telephone: string;
    active: boolean;
    isWhatsapp: boolean;
}

export { ICreateUserDTO }