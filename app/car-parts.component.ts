import {Component} from '@angular/core';
import {CarPart} from './car-part';
import {CARPARTS} from './mocks';

@Component({
  selector: "car-parts", // Display in selector defined in app.component.ts
  templateUrl: "app/car-parts.component.html",
  styleUrls: ["app/car-parts.component.css"]
})

export class CarPartComponent {
  carParts : CarPart[];
  
  ngOnInit() {
	this.carParts = CARPARTS;
  }
  
  totalCarParts(){
    let sum = 0;
	for (let carPart of this.carParts) {
	  sum += carPart.inStock;
	}
	return sum;
  }
  
  upQuality(carPart){
    if (carPart.quantity < carPart.inStock) carPart.quantity++;
  }
  
  downQuality(carPart){
    if (carPart.quantity != 0) carPart.quantity--;
  }
}