import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { produit } from '../models/produit';
import { discount } from '../models/discount';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {

  produits: produit[] = [
    {
      id: 1,
      name: "Turquie",
      img: "/img/turquie.jpg",
      price: 1000,
    },
    {
      id: 2,
      name: "Islande",
      img: "/img/islande.jpg",
      price: 4000,
      isDiscount : new discount(10, new Date ("12-25-2024")),

    },
    {
      id: 3,
      name: "Croatie",
      img: "/img/croatie.jpg",
      price: 1500,
      isDiscount : new discount(25, new Date ("01-02-2025")),
    },
    {
      id: 4,
      name: "Java",
      img: "/img/java.jpg",
      price: 5400,
    },
    {
      id: 5,
      name: "Slovénie",
      img: "/img/slovenie.jpg",
      price: 2500,
      isDiscount : new discount(15, new Date ("01-01-2025")),
    },
    {
      id: 6,
      name: "Bulgarie",
      img: "/img/bulgarie.JPG",
      price: 2000,
      isDiscount : new discount(50, new Date ("12-12-2024")),
    },
    {
      id: 7,
      name: "Autriche",
      img: "/img/autriche.jpg",
      price: 3000,
    },
    {
      id: 8,
      name: "Allemagne",
      img: "/img/allemagne.jpg",
      price: 3200,
      isDiscount : new discount(15, new Date ("10-10-2024")),
    },
    {
      id: 9,
      name: "Canaries",
      img: "/img/canaries.jpg",
      price: 3100,
      isDiscount : new discount(30, new Date ("10-02-2024")),
    },
    {
      id: 10,
      name: "Singapour",
      img: "/img/singapour.jpg",
      price: 4500,
    }
  ]

  produitsAchetes: produit[] = [];

  //produits en promotion
  produitsEnPromo(): produit[] {
    return this.produits.filter(produit => produit.isDiscount);
  }

  // cacul du prix de après promotion
  promoPrice(produit: produit): number {
    const discount = (produit.price * produit.isDiscount?.discountValue!) / 100;
    return produit.price - discount;
  }

  // // calcul du nombre de jour restant
  dayRemaining(produit: produit): number | null{
		const promotionEndDate =produit.isDiscount?.discountEndDate;
    const difference : number =  promotionEndDate!.getTime() - Date.now() ;
    const daysRemaining : number = Math.floor(difference / (1000 * 3600 * 24));

    return daysRemaining;
	}

  // déplace les produits dans la table des produits acheté au clic
  acheterProduit(index: number) {
    const produitAchete = this.produits[index];
    this.produitsAchetes.push(produitAchete);
    this.produits.splice(index, 1);
  }

}
