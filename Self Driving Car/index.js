"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events) {
        if (!this.isRunning) {
            console.log('The car is off');
        }
        else {
            Object.keys(events).forEach((eventKey) => {
                if (!events[eventKey]) {
                    return;
                }
                if (eventKey === 'ObstacleLeft') {
                    this.steeringControl.turn('right');
                }
                if (eventKey === 'ObstacleRight') {
                    this.steeringControl.turn('left');
                }
            });
        }
    }
}
class SteeringControl {
    execute(command) {
        console.log(`Executing ${command}`);
    }
    turn(direction) {
        this.execute(`turn ${direction}`);
    }
}
/*Main
When the car is **OFF** isRunning = false => get car state
When the car is **ON** isRunning = true simulate multiple responses
*/
const steering = new SteeringControl();
const autonomousCar = new Car({ isRunning: true, steeringControl: steering });
console.log('Is the car running ?', autonomousCar.isRunning);
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
