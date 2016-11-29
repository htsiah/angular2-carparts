import {Component} from '@angular/core';
import {CarPart} from './car-part';
import { RacingDataService } from './racing-data.service';

@Component({
  selector: "car-parts", // Display in selector defined in app.component.ts
  templateUrl: "app/car-parts.component.html",
  styleUrls: ["app/car-parts.component.css"]
})

export class CarPartComponent {
  carParts : CarPart[];
  
  // Declare a constructor
  constructor (private racingDataService: RacingDataService) {}
  
  ngOnInit() {
	this.racingDataService.getCarParts()
		.subscribe(carParts => this.carParts = carParts); // When carParts arrive on our data stream, set it equal to our local carParts array.
  }
  
  totalCarParts(){
    let sum = 0;
	if(Array.isArray(this.carParts)) {
		for (let carPart of this.carParts) {
			sum += carPart.inStock;
		}
	};
	return sum;
  }
  
  upQuality(carPart){
    if (carPart.quantity < carPart.inStock) carPart.quantity++;
  }
  
  downQuality(carPart){
    if (carPart.quantity != 0) carPart.quantity--;
  }
}