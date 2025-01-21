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
    return this.users.find((user) => user.id === this.selectedUserID)!;
  }

  onSelectUser(id: string) {
    this.selectedUserID = id;
  }
}

//decorators are like detailed blueprints or instructions for Angular to:
//1. Understand what the component does.
//2. Manage the data and behavior within the component
//3. Connect it to the broader app structure.
