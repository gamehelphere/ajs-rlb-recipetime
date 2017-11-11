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

import { Component, OnInit } from '@angular/core';
import { IngredientsListService } from './ingredientslist.service';
import { IngredientsListEntry } from './ingredientslistentry';
import { Observable } from 'rxjs/Observable';

// For routing. 11/10/2017 - 7:01 PM.

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ingedientslist',
  templateUrl: './ingredientslist.component.html',
  styleUrls: ['./ingredientslist.component.css'],
  providers: [ IngredientsListService ]
})

export class IngredientsListComponent implements OnInit
{
  private IngredientsListEntry : IngredientsListEntry;
  private IngredientsList : IngredientsListEntry[];

/*

  Constructor used to inject the private classes from different services.

*/

  constructor(
    private IngredientslistService : IngredientsListService,
    private route : ActivatedRoute,
    private location : Location
  )
  {

  }

/*

  First thing to be called when the component is loaded. One time only!

*/

  ngOnInit(): void
  {
    this.showSelectedRecipeIngredients();
  }

  showSelectedRecipeIngredients() : void
  {
    var obIngredientsList : Observable<IngredientsListEntry[]>;

  /*

    I found the solution to do reloads on the same routerlink instead of clicking another routerlink. In my example
    clicking the links in the recipe name will reload the <router-outlet> instead of first clicking the recipe name,
    then the unit name, then back to the target recipe name to show the details. The URL of the solution is here.

    https://angular.io/guide/router#router-links

    Under

    https://angular.io/guide/router#activated-route-in-action

    I still have yet to discover how to reload the route of a router link when I click on the same link.

    11/10/2017 - 11:55 PM

  */

    const recipeCode  = this.route.paramMap.switchMap((params : ParamMap) => this.IngredientslistService.getIngredientsList(params.get('id')));

    console.log(recipeCode.subscribe());

  }
}
