import {NgModule, Component} from '@angular/core';
import {AppComponent} from './app.component';
import {CarPartComponent} from './car-parts.component';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule ({
  imports:      [ BrowserModule ], // List down all component will be used.
  declarations: [ AppComponent, CarPartComponent], // Import dependencies.
  bootstrap:    [ AppComponent ] // Indicate first component to launch.
})

class AppModule {}

// Start the application in web browser.
platformBrowserDynamic().bootstrapModule(AppModule);