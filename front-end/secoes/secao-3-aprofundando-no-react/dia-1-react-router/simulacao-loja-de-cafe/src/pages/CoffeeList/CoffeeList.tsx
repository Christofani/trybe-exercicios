import { Link } from "react-router-dom";
import './coffeList.css';

function CoffeeList() {
  return (
    <div className="list-page">
      <h1>CoffeList page</h1>
      <Link to="/">
         <button className="button-coffee">Voltar</button>
      </Link>
    </div>
  );
}

export default CoffeeList;