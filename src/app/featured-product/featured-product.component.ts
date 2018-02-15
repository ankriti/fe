import { Component, OnInit, Input  } from '@angular/core';
import { Product } from '../shared/Product';
import { Products } from  '../shared/Products';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() 
  product: Product
}
