import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="home-page">
      <div className='home-title'>
       <h1>Coffeeteria</h1>
      </div>
      <Link to="/coffees">
        <button>Conheça nossos produtos</button>
      </Link>
    </div>
  );
}

export default Home;