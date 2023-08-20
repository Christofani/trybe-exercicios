import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
   <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={ <About />}/>
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
   </div>
  )
}

export default App
