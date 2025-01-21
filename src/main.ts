//This function is responsible for starting (or bootstrapping) the Angular application in the browser.
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

//The bootstrap application is the starting point of our app. It tells Angular which part of our code should be the main entry for the app and what to load first. It's like saying, "Start the app from here!" This is usually done in the main.ts file, where Angular links our root (AppComponent) to the web page.
