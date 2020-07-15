export class counterService{
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive(){
        this.activeToInactiveCounter++;
        console.log('active - inactive : ' + this.activeToInactiveCounter);
    }

    incrementInActiveToActive(){
        this.inactiveToActiveCounter++;
        console.log('inactive - active : ' + this.inactiveToActiveCounter);
    }
}