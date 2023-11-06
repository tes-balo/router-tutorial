import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  ProductsService: ProductsService;
  products!: Array<Product>;
  constructor(ProductsService: ProductsService) {
    this.ProductsService = ProductsService;
  }

  ngOnInit(): void {
    this.products = this.ProductsService.products;
    // this.products = this.ProductsService.getProducts();  method alternative
  }
}
