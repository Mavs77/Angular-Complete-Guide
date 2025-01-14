//This function is responsible for starting (or bootstrapping) the Angular application in the browser. 
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent).catch((err) => console.error(err));


//The main.ts file is the entry point of an Angular application. It sets up and starts the app in the browser. 