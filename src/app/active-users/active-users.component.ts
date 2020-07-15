import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {UserService} from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements  OnInit{
  users: string[];
  
  constructor(private userService:UserService){}

  ngOnInit(){// VERY IMPORTANT CONCEPT OF TRANSFERING AN ARRAY
    // the array of active users from users service is transfered to the users array of this component
    // whatever change will occure in the array at user service will be reflected here
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
      // set the user whoes id is provided to inactive array using service method
      this.userService.setToInactive(id);
  }
}
