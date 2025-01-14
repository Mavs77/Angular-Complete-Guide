import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

//component decorator. Represented by @component keyword (part of Angular library). Used to define and configure a component class. Provides metadata that Angular uses to create, instantiate, and render the component. 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS; 
  selectedUserID = 'u1'

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserID
    )!; 
  }

  onSelectUser(id: string) {
    this.selectedUserID = id; 
  }
}
  