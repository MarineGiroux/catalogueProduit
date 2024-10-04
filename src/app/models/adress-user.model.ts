export class AdressUser {
    street: string;
    zipcode: string;
    city: string;

    constructor(street: string, zipcode: string, city: string){
        this.street = street,
        this.zipcode = zipcode,
        this.city = city
    }
}