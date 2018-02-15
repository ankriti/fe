import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/Product';
import { Products } from  '../shared/Products';

@Component({
  selector: 'app-display-slider',
  templateUrl: './display-slider.component.html',
  styleUrls: ['./display-slider.component.scss']
})
export class DisplaySliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentProductCount=0;
  
  current=0;
  currentBackeard=0;
  total=6;
  temp=0;

  element1 : Product =Products[(this.current+0)%4];
  element2 : Product =Products[(this.current+1)%4];
  element3 : Product =Products[(this.current+2)%4];
  element4 : Product =Products[(this.current+3)%4];

  displaySet: Product[]=[this.element1,this.element2,this.element3,this.element4];

  
  scrollPrevious(){
    
    this.currentBackeard=(this.currentBackeard-1);
    this.temp = (this.currentBackeard%this.total)*-1;
    this.computeDisplayArrayRight(this.temp);
  };
  scrollNext(){
    this.current=this.current+1;
    this.current = this.current%this.total
    console.log("This : "+this.current);
    this.computeDisplayArrayLeft(this.current);
  }
  computeDisplayArrayRight(id){
    this.element1=Products[(id+0)%this.total];
    this.element2=Products[(id+1)%this.total];
    this.element3=Products[(id+2)%this.total];
    this.element4=Products[(id+3)%this.total];
    this.displaySet=[this.element1,this.element2,this.element3,this.element4];
  }
  computeDisplayArrayLeft(id){
    this.element1=Products[this.conputePositiveId(id,1)%this.total];
    this.element2=Products[this.conputePositiveId(id,2)%this.total];
    this.element3=Products[this.conputePositiveId(id,3)%this.total];
    this.element4=Products[this.conputePositiveId(id,4)%this.total];
    this.displaySet=[this.element1,this.element2,this.element3,this.element4];
  }
  conputePositiveId(id,diff){
    if((id-diff)>0)return (id-diff)
    return -1*(id-diff);
  }
}
