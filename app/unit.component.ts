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

import { Component } from '@angular/core';

@Component({
  selector: 'unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})

/*

  The UnitComponent will maintain the unit table of the database.

*/

export class UnitComponent
{
  title = 'Unit List';
}
