import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  ActivatedRouteService: ActivatedRoute;
  ProductsService: ProductsService;
  RouterService: Router;
  subscription!: Subscription;

  product: Product | undefined;

  id!: string | null;
  constructor(
    ActivatedRouteService: ActivatedRoute,
    RouterService: Router,
    ProductsService: ProductsService
  ) {
    this.ActivatedRouteService = ActivatedRouteService;
    this.RouterService = RouterService;
    this.ProductsService = ProductsService;
  }

  ngOnInit(): void {
    this.subscription = this.ActivatedRouteService.paramMap.subscribe(
      (params) => {
        console.log(params);
        console.log('param test = ' + params.get('id'));
        this.id = params.get('id'); //gets the id of the current route which is provided by [routerLink] property in the template.
        let products = this.ProductsService.products;
        console.log(products);
        this.product = products.find(
          (product) => product.index == Number(this.id)
        );
        console.log(this.product);
        console.log(params);

        // Note that queryParamMap provides the queryParameters available that is available to the active route. It's functionally equivalent to paramMap. The only difference is in what they retrieve.
      }
    );
    // ActivatedRoute.snapshot vs ActivatedRoute.paramMap
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
