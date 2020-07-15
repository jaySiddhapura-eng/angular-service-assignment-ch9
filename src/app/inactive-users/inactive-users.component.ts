import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {UserService} from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  // we are using the service instance whhich was provided at the app.component.ts
  // no new instance of the userService
  constructor(private userService:UserService){}     

  ngOnInit(){ // VERY IMPORTANT CONCEPT OF TRANSFERING AN ARRAY
    // the array of inactive users from user service is transfered to the user array of this component
    // whatever change will occure in the array at user service will be reflected here
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    // set the user whoes id is provided to active array using service method
    this.userService.setToActive(id);
  }
}
