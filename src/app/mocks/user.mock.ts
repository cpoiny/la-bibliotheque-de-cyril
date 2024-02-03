export interface IUser {
    id: number,
    pseudo: string,
    email: string,
    password: string,
    role: "admin" | "contributor" | "visitor",
    token: string
}


export const USERS: IUser[] = [ 
    {
        id: 1,
        pseudo: "Cyril",
        email: "cyril@gmail.com",
        password: "pwd132",
        role: "admin",
        token: "123456789azerty"
    }
]