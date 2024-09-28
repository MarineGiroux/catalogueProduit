export class produit{
    id: number;
    name: string;
    img: string;
    price: number;
    isPromo: boolean;
    promoValue: number | null ;
    promotionEndDate: Date | null;


    constructor(id: number, name: string, img: string, price: number, isPromo: boolean, promoValue: number | null, promotionEndDate: Date | null){
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.isPromo = isPromo;
        this.promoValue = promoValue;
        this.promotionEndDate = promotionEndDate;
    }
}