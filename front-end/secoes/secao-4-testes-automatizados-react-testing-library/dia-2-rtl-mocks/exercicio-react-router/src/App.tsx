import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/layout'
import Home from './pages/Home/home'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />} />
      </Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
   </div>
  )
}

export default App;
