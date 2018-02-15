import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/Product';
import { Products } from '../shared/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 
  selectedProduct: Product = Products[0];

 

}
