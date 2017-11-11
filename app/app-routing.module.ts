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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { IngredientsListComponent } from './ingredientslist.component';
import { UnitComponent } from './unit.component';

/*

  Define route to show the Ingredients component.

  11/10/2017 - 6:14 PM.

*/

/*

  I used parameters to send values to the listening server part of this project.
  The parameter in these statements is the one with the ':id' on it.

*/

const routes : Routes = [
  { path : '', redirectTo : '/', pathMatch : 'full'},
  { path : 'showrecipeingredients/:id', component : IngredientsListComponent },
  { path : 'showunits', component : UnitComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports : [ RouterModule ]
})

export class AppRoutingModule
{

}
