import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

const initialProducts: Array<Product> = [
  {
    name: 'Nike shoe',
    price: 50,
    id: '2bc59c50-c4e1-11ed-8ed1-21054bf4c830',
    index: 1,
    credit: 'Photo by Revolt via Unsplash',
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=40',
    attribution: 'https://unsplash.com/@revolt',
  },
  {
    name: 'Hair clipper',
    price: 95,
    id: 'b68cf780-c4e5-11ed-9f76-bff037db4194',
    index: 2,
    credit: 'Photo by Andrea Donato via Unsplash',
    url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    attribution: 'https://unsplash.com/@andreadonato',
  },
  {
    name: 'Iphone 15',
    price: 800,
    id: 'e571d1b0-c4e5-11ed-9f3f-db35b02c0400',
    index: 3,
    credit: 'Photo by Neil Sony via Unsplash',
    url: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    attribution: 'https://unsplash.com/@neilsoniphotography',
  },
  {
    name: 'Acer e15',
    price: 1200,
    id: '1ae57180-c4e6-11ed-8e39-755da1004f40',
    index: 4,
    credit: 'Photo by Jeroen den Otter via Unsplash',
    url: 'https://images.unsplash.com/photo-1525971977907-20d22da82d6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    attribution: 'https://unsplash.com/@jeroendenotter',
  },
  {
    name: 'Playstation 5',
    price: 400,
    id: '236a13b0-c4e6-11ed-8fa9-27529c0df761',
    index: 5,
    credit: 'Photo by Tamara Bitter via Unsplash',
    url: 'https://images.unsplash.com/photo-1607016284318-d1384bf5edd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    attribution: 'https://unsplash.com/@tamofoto',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Array<Product> = initialProducts;

  // getProducts(): Array<Product> {
  //   return this.products;
  // } // alternative with private products

  getProduct(id: string) {
    return this.products.find((product) => product.id == id);
  }
  constructor() {}
}
