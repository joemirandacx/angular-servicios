import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList : Product[] = [];
  subtotal!: number;

  constructor(private productsService : ProductsService) {
  }

  ngOnInit(): void {
    this.productList = this.productsService.getAllProducts();
    this.subtotal = this.getSubTotal();
  }

  getSubTotal() : number{
    const prices = this.productList.map( item => item.productPrice);
    return prices.reduce((accumulator, curr) => accumulator + curr );
  }
}
