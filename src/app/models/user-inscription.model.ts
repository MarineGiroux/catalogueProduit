import { AdressUser } from "./adress-user.model";

export class UserInscription {
    userName: string;
    email: string;
    password: string;
    adress: AdressUser;

    constructor(
        username: string,
        email: string,
        password: string,
        adress: AdressUser,
      ) {
        this.userName = username;
        this.email = email;
        this.password = password;
        this.adress = adress;
      }
}