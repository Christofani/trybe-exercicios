import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/HomeIndex';
import CoffeeList from './pages/CoffeeList/CoffeeList';
import './App.css';
import NavBar from './pages/NavBar/navbar';


function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/coffees" element={ <CoffeeList />} />
    </Routes>
    </>
  )
}

export default App
