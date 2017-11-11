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

import { RecipeListEntry } from './recipelistentry';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type' : 'application/json'})
}

/*

  A cool injectable class that can be used by other components! This will get the
  list of recipes in the recipe table of the rlbrecipetime.sql SQLite3 database.

*/


@Injectable()
export class RecipeListService
{
  private targetUrl;

  constructor(private http: HttpClient)
  {

  }

  getRecipeList() : Observable<RecipeListEntry[]>
  {
    var body : Object[];
    var manyRecipe : Observable<RecipeListEntry[]>;

    body = [{channelName : 500}, {pusa : 'kitty'}];

    this.targetUrl = 'http://127.0.0.1:5002/grabrecipes';

    /*

      Send a PUT request to the server. I want to know how PUT requests work and used the .put() method of the HttpClient instance.
      Always remember that PUT requests often made after OPTIONS requests. Be sure to anticipate both in your server to avoid
      massive headaches. :)

    */

    const reqi = this.http.put<RecipeListEntry[]>(this.targetUrl, JSON.stringify(body), {params : new HttpParams().set('mustget', 'heto na!!'), headers : new HttpHeaders({'Content-Type' : 'application/json'}), responseType : 'json'});
    manyRecipe = reqi;
    console.log("getRecipeList SUBSCRIBE!!");


    return reqi;
  }
}
