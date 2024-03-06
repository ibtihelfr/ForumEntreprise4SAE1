import { User } from "./user";

export class Claim {
    idReclamation:number;
    message:String;
    dateReclamation:Date;
    typeReclamation:String;
    users:User[];
    likes: number;
    dislikes: number;
}
