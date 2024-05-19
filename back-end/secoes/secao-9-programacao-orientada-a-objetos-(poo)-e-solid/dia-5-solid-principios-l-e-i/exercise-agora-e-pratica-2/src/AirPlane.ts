import {IAirPlane} from "./interfaces/Vehicle";

export default class AirPlane implements IAirPlane  {
  fly(): void {
    console.log("I'm Fly");
  }
}