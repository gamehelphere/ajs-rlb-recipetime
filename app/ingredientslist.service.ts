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

import { IngredientsListEntry } from './ingredientslistentry';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

/*

  Header to tell the server that the incoming data is in JSON format.

*/

const httpOptions = {
  headers : new HttpHeaders({'Content-Type' : 'application/json'})
}

/*

  As an injectable, instances of this class can be injected into the constructors
  of other classes if needed. See the constructors of both recipelist.component.ts
  and ingredients.component.ts files that shows those classes expect @Injectable()
  class instances like this IngredientListService class.

*/

@Injectable()
export class IngredientsListService
{
  private targetUrl;

  constructor(private http: HttpClient)
  {

  }

  getIngredientsList(givenRecipeCode : string) : Observable<IngredientsListEntry[]>
  {
    var body : Object[];
    var manyIngredients : Observable<IngredientsListEntry[]>;

    body = [{channelName : 500}, {pusa : 'kitty'}];

    this.targetUrl = 'http://127.0.0.1:5002/showrecipeingredients';

    /*

    A long line to do a GET request. This GET request will send a recipecode value in text and receive
    a JSON document from the server.

    */

    const reqi = this.http.get<IngredientsListEntry[]>(this.targetUrl, {params : new HttpParams().set('recipecode', givenRecipeCode), headers : new HttpHeaders({'Content-Type' : 'application/json'}), responseType : 'json'});
    manyIngredients = reqi;

    return reqi;
  }
}
