import {ICar} from "./interfaces/Vehicle";

export default class Car implements ICar {
  drive(): void {
    console.log('Drive a car ');  
  }

  fly(): void {
   throw new Error('Error / I not Fly');
  }
}