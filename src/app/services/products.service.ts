import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable(
  { providedIn: 'root'} // Disponible de manera global para todos los módulos.
)
export class ProductsService {

  productList: Product[];

  constructor() {
    this.productList = [
      {
       productName: "Rustic Granite Mouse",
       productPrice: 548.00,
       ProductDescription: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
       productId: 1
      },
      {
       productName: "Awesome Rubber Gloves",
       productPrice: 265.00,
       ProductDescription: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
       productId: 2
      },
      {
       productName: "Elegant Plastic Towels",
       productPrice: 274.00,
       ProductDescription: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
       productId: 3
      },
      {
       productName: "Luxurious Frozen Keyboard",
       productPrice: 46.00,
       ProductDescription: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
       productId: 4
      },
      {
       productName: "Generic Granite Cheese",
       productPrice: 212.00,
       ProductDescription: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
       productId: 5
      },
      {
       productName: "Unbranded Wooden Sausages",
       productPrice: 100.00,
       ProductDescription: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
       productId: 6
      },
      {
       productName: "Handcrafted Cotton Towels",
       productPrice: 945.00,
       ProductDescription: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
       productId: 7
      },
      {
       productName: "Generic Fresh Fish",
       productPrice: 500.00,
       ProductDescription: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
       productId: 8
      },
      {
       productName: "Rustic Bronze Shirt",
       productPrice: 212.00,
       ProductDescription: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
       productId: 9
      },
      {
       productName: "Small Wooden Tuna",
       productPrice: 517.00,
       ProductDescription: "The Football Is Good For Training And Recreational Purposes",
       productId: 10
      }
    ];
  }

  getAllProducts() : Product[]{
    return this.productList;
  }

  getProductById(productId: number){
    return this.productList.find(product => product.productId==productId);
  }
}
