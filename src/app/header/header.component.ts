
// Brings in the component class from Angular's core library (located in your project's node_modules folder). This class allows us to define a component, which is like a building block of an Angular app. 
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

// The @Component is a decorator that tells Angular:
// "Hey, this class is a component, and here’s how it should behave."

// Key Properties:
// selector: 'app-header'

// This is like a custom HTML tag (<app-header></app-header>).
// You can use it in your app to display this component.

// standalone: true

// This means this component can work on its own and doesn’t need to be part of an NgModule.
// It's a newer Angular feature for simpler, modular components.

// imports: []

// If your component depends on other components, directives, or Angular modules, you list them here.
// Right now, it's empty because no dependencies are needed.

// templateUrl: './header.component.html'

// This points to the HTML file that defines what this component looks like.
// Example: <h1>Welcome to My App</h1>


// styleUrl: './header.component.css'

// This points to the CSS file for styling the component.
// Example: h1 { color: blue; }
