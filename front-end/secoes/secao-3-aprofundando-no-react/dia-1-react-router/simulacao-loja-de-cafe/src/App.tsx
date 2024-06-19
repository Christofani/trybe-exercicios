import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/HomeIndex';
import CoffeeList from './pages/CoffeeList/CoffeeList';
import './App.css';
import NotFound from './pages/NotFound/not-found';
import Coffee from './pages/Coffee/Coffee';
import Layout from './components/layout/layout';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={ <Home />} />
      <Route path="/coffees" element={ <CoffeeList />} />
      <Route path="/coffees/:coffee" element={ <Coffee />}/>
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
    </>
  )
}

export default App;

