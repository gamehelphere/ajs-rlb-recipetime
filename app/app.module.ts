/*
Author: Ryan Baclit
Email: gamehelphere@gmail.com
Date: 11/11/2017
Disclaimer:

This software does not come with a warranty of any kind. It is your responsibility
to take care of your computer, software, and related setups. You will not hold the
author responsible for any problems that may arise during your use of the software.

Description:

The AnjularJS 5 front end of the RLB-RecipeTime project. This is my first true
take on AngularJS 5 and it is really fun! I included the source codes in the
src/app for viewing. I have included a simple
install instruction document with the project to help you test my project in your
computer.

Thanks for looking!

*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RecipeListComponent } from './recipelist.component';
import { IngredientsListComponent } from './ingredientslist.component';
import { UnitComponent } from './unit.component';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, RecipeListComponent, IngredientsListComponent, UnitComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
