import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

//This root module servers as the central place where all our app's child components, services, and other modules are declared or imported.

//Instead of modifying main.ts, you add child components here. This keeps things organized and allows Angular to manage all components and modules systematically.

//component decorator. Represented by @component keyword (part of Angular library). Used to define and configure a component class. Provides metadata that Angular uses to create, instantiate, and render the component.

//TS feature that adds meta-data. Receives and object with configurations for the component.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

// A class defines a blueprint for creating objects with properties and methods
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserID = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserID)!; //the exclamation point is assuring typescript that we will find a user with an ID that matches the value provided by selectedUserID. Without this exclamation TS correctly points out that the find method MIGHT NOT find a user and we need to account for that in some way. It just so happens that how we account for it is by using the exclamation symbol which = "Trust me bro"
  }

  onSelectUser(id: string) {
    this.selectedUserID = id;
  }
}

//decorators are like detailed blueprints or instructions for Angular to:
//1. Understand what the component does.
//2. Manage the data and behavior within the component
//3. Connect it to the broader app structure.

//Note: it typically does not make sense for the root component in an Angular projects to have an @Input decorator because there's not parent component to pass data to it.
