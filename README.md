Author: Ryan Baclit
Email: gamehelphere@gmail.com
Date: 11/11/2017
Disclaimer:

This software does not come with a warranty of any kind. It is your responsibility to take care of your computer, software, and related setups. You will not hold the author responsible for any problems that may arise during your use of the software.

Description:

The ajs-rlb-reciptime is an AngularJS 5 project that can connect to a WSGI Python server to show and maintain recipes. I did this project as my true starting point to AngularJS that is outside of the Heroes Tutorial. Why recipe? I know how to cook and will use an electronic, custom, and online software like this to maintain my recipes!

The project is still continuing and will be updated regularly. Right now this project can only show some recipes and no ingredients. It shows how I use multiple technologies efficiently like HTML, Javascript, Python, and SQL through AngularJS.

Installation:

My setup uses Ubuntu Linux 17. If you have another operating system, make the necessary adjustments by reading proper documents online based on your setup.

1. Go to https://angular.io/guide/quickstart and read it thoroughly. That will help you understand how to install both NodeJS and AngularJS in your computer. Do not forget to test your setup to see if your AngularJS is running correctly.

2. Download all the contents of the app folder of this project, and put it in the src /app folder of your AngularJS app. You are effectively overwriting the contents of your app’s src/app folder with this project’s app folder.

3. Go to https://github.com/gamehelphere/rlb-recipetime and study the README.md to install the WSGI Python server. Do this on another command line to avoid conflict with the command line that handles your AngularJS app.

3. In your web browser, access the site using

http://localhost:4200

Or reload your browser. I assume that your AngularJS app is still running from step 2. If it is not, start it again.

You will see some recipe entries when you successfully run the app. If you look at the WSGI Python server, there will be some output about the connections made by the AngularJS app. More operations will be added soon.
