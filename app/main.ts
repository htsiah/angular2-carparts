import {NgModule, Component} from '@angular/core';
import {AppComponent} from './app.component';
import {CarPartComponent} from './car-parts.component';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { RacingDataService } from './racing-data.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule ({
  imports:      [ BrowserModule, FormsModule, HttpModule ], // List down all component will be used.
  declarations: [ AppComponent, CarPartComponent ], // Import dependencies.
  bootstrap:    [ AppComponent ], // Indicate first component to launch.
  providers: 	[ RacingDataService ] // Now all subcomponents can ask for (inject) our RacingDataService.
})

class AppModule {}

// Start the application in web browser.
platformBrowserDynamic().bootstrapModule(AppModule);