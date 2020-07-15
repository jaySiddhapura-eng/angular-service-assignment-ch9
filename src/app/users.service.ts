import { Injectable } from "@angular/core";
import { counterService } from "./counter.service";

@Injectable ()
export class UserService {
    activeUsers = ['Max', 'Anna'];      // default content of the array
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counter:counterService){}

    setToActive(id:number){
        // take the user from inactive array using id an push it into the active user
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id,1);  // remove th pushed element from inactiveUser array
        this.counter.incrementInActiveToActive();
    }

    setToInactive(id:number){
        // take the user from active array using id an push it into the inactive user
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id,1);  // remove the pushed element from activeUser array
        this.counter.incrementActiveToInactive();
    }
}