import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

// Defines a type alias `User` to represent the structure of user objects.
// This type ensures all user-related objects in the project have:
// - `id` (string): A unique identifier for the user.
// - `name` (string): The user's display name.
// - `avatar` (string): The URL for the user's profile picture.
// Example:
// const newUser: User = { id: '123', name: 'John Doe', avatar: 'https://example.com/avatar.jpg' };

//{ } = configuration objects or plain objects that provide additional info or settings about the data you're working with. These objects are used in various contexts throughout Angular.

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  //the "this" key word is how you access properties from a class within the same class
  get imagePath() {
    return '../assets/users/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

// 01-starting-project/src/assets/users/users/user-1.jpg
