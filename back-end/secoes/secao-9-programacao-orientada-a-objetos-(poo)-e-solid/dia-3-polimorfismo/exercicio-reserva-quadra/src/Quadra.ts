import IAgenda from "./interfaces/IAgenda";

// src/Quadra.ts
abstract class Quadra<T> { 
  abstract reservar(data: Date): IAgenda<T>;
 }

export default Quadra;