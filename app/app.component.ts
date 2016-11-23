import {Component} from '@angular/core';

// This is component declarator, we called it metadata.
@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
	<car-parts></car-parts>
  `
})

export class AppComponent{
  title = "Ultra Racing"  // Example of property  
}