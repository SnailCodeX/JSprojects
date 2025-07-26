import { getObstacleEvents } from './computer-vision';

interface Events{
  [events: string]: boolean
}
interface AutonomousCar {
  isRunning: boolean,
  respond: (events: Events) => void  
}
interface AutonomousCarProps{
  isRunning?: boolean
  steeringControl: Steering

}
interface Control{
  execute: (command: string) => void
}
interface Steering{
  turn: (direction: string) => void
}
class Car implements AutonomousCar {
  isRunning: boolean | undefined
  steeringControl: Steering
  constructor(props: AutonomousCarProps){
    this.isRunning = props.isRunning
    this.steeringControl = props.steeringControl
    
  }
  respond(events: Events){
    if (!this.isRunning){
      console.log('The car is off')
    } else {
      Object.keys(events).forEach((eventKey) => {
        if (!events[eventKey]){
          return
        }
        if (eventKey === 'ObstacleLeft'){
          this.steeringControl.turn('right')
        }
        if (eventKey === 'ObstacleRight'){
          this.steeringControl.turn('left')
        }
      })
    }
  }
}
class SteeringControl implements Steering{
  execute(command: string){
    console.log(`Executing ${command}`)
  }
  turn(direction: string){
    this.execute(`turn ${direction}`)
  }
}

/*Main
When the car is **OFF** isRunning = false => get car state 
When the car is **ON** isRunning = true simulate multiple responses
*/

const steering = new SteeringControl();
const autonomousCar = new Car({isRunning: true, steeringControl: steering})
console.log('Is the car running ?',autonomousCar.isRunning)
autonomousCar.respond(getObstacleEvents())
