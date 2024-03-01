export class User {

    constructor(

       public id: number,
       public pseudo: string,
       public email: string,
       public password: string,
       public role: "admin" | "contributor" | "visitor",
       public token: string

    ){}
}
