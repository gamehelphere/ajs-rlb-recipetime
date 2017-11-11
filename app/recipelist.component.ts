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
import { RecipeListService } from './recipelist.service';
import { RecipeListEntry } from './recipelistentry';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css'],
  providers: [ RecipeListService ],
})


export class RecipeListComponent implements OnInit
{
  private recipeListEntry : RecipeListEntry;
  private recipeList : RecipeListEntry[];

  /*

  Instance of this class will expect an injection of an instance of the
  RecipeListService class.

  */

  constructor(
    private recipelistService : RecipeListService,
  )
  {

  }

  ngOnInit(): void
  {
    var obRecipeList : Observable<RecipeListEntry[]>;

    /*

      Get the Observable object to get an array of RecipeListEntry from the
      RecipeListService instance.

    */

    obRecipeList = this.recipelistService.getRecipeList();

    /*

      Call the subscribe() function of the received Observable to do the request.
      If you don't nothing will happen. It took me some time to get this! :p

      Read more about the JavaScript arrow operator to know how this works. Here is
      a short take of it.

      1. Observable's subscribe() is called and connects with the server using the
      assigned request. See the definition of the getRecipeList() method for more
      information.
      2. Results will be retrieved from the server and placed in the 'goma' variable.
      The 'goma' paramter will be visible to the body to the right of the => operator.
      3. The body to the right of the => operator, or the statements in the {} will
      be run. See that the 'goma' parameter has the 'data' key that was sent by the

              return dict(data = jsonRows)

      line of the rlb-recipetime.py file. See my other project called 'rlb-recipetime'
      in http://github.com/gamehelphere for more information.

    */

    obRecipeList.subscribe(goma => { this.recipeList = goma['data']});
  }

  /*
    Fill the recipeListEntry with the user's selected recipe.

    11/10/2017 - 6:05 PM

    Test method to see if things were assigned correctly. This was called in the
    (click) event of the template file of this component.

  */

  showIngredients(recipeListEntry : RecipeListEntry) : void
  {
    console.log("Show Ingredients -> " + recipeListEntry.description);
    this.recipeListEntry = recipeListEntry;
  }

}
