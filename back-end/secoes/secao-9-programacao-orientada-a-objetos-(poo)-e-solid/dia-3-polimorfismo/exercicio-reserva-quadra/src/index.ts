import Clube from "./Clube";
import IFutebol from "./interfaces/IFutebol";
import ITenis from "./interfaces/ITenis";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const trybeClube = new Clube<IFutebol | ITenis>();

const quadra = new QuadraFutebol();

trybeClube.adicionarQuadra(quadra);

const data = new Date('2024-05-11');

const reserva = quadra.reservar(data);

console.log(reserva);

const quadraTenis = new QuadraTenis();

trybeClube.adicionarQuadra(quadraTenis);

const reservarQuadratenis = trybeClube
  .buscarQuadra(1)
  .reservar(data);

  console.log(reservarQuadratenis);
  
