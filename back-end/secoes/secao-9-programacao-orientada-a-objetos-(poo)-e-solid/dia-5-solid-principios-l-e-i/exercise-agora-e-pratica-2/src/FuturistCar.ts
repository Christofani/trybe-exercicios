import { IFuturisticCar } from "./interfaces/Vehicle";

 class FuturistCar implements IFuturisticCar {
  drive(): void {
    console.log('Drive a futuristic car');
  }

  fly(): void {
    console.log('Flying a futuristic car');
  }
}

export default FuturistCar;