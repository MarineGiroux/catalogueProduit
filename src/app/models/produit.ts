import { discount } from "./discount";

export class produit{
    id: number;
    name: string;
    img: string;
    price: number;
    isDiscount?: discount;


    constructor(id: number, name: string, img: string, price: number, discount: discount){
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.isDiscount = discount;
    }


}