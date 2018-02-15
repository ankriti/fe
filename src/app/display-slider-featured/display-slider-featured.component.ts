import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/Product';
import { FeaturedProducts } from  '../shared/FeaturedProducts';

@Component({
  selector: 'app-display-slider-featured',
  templateUrl: './display-slider-featured.component.html',
  styleUrls: ['./display-slider-featured.component.scss']
})
export class DisplaySliderFeaturedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentProductCount=0;
  
  current=0;
  currentBackeard=0;
  total=5;
  temp=0;
  narrowRow=1;
  broadRow=8;
  narrowColor="Blue";
  broadColor="Green";

  element1 : Product =FeaturedProducts[(this.current+0)%this.total];
  element2 : Product =FeaturedProducts[(this.current+1)%this.total];
  element3 : Product =FeaturedProducts[(this.current+2)%this.total];
  element4 : Product =FeaturedProducts[(this.current+3)%this.total];

  displayFeaturedSet: Product[]=[this.element1,this.element2,this.element3,this.element4];

  scrollFeaturedPrevious(){
    
    this.currentBackeard=(this.currentBackeard-1);
    this.temp = (this.currentBackeard%this.total)*-1;
    this.computeDisplayfeaturedArrayRight(this.temp);
  };
  scrollFeaturedNext(){
    this.current=this.current+1;
    this.current = this.current%this.total
    console.log("This : "+this.current);
    this.computeDisplayfeaturedArrayLeft(this.current);
  }
  computeDisplayfeaturedArrayRight(id){
    this.element1=FeaturedProducts[(id+0)%this.total];
    this.element2=FeaturedProducts[(id+1)%this.total];
    this.element3=FeaturedProducts[(id+2)%this.total];
    this.element4=FeaturedProducts[(id+3)%this.total];
    this.displayFeaturedSet=[this.element1,this.element2,this.element3,this.element4];
  }
  computeDisplayfeaturedArrayLeft(id){
    this.element1=FeaturedProducts[this.conputePositiveId(id,1)%this.total];
    this.element2=FeaturedProducts[this.conputePositiveId(id,2)%this.total];
    this.element3=FeaturedProducts[this.conputePositiveId(id,3)%this.total];
    this.element4=FeaturedProducts[this.conputePositiveId(id,4)%this.total];
    this.displayFeaturedSet=[this.element1,this.element2,this.element3,this.element4];
  }
  conputePositiveId(id,diff){
    if((id-diff)>0)return (id-diff)
    return -1*(id-diff);
  }

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}

