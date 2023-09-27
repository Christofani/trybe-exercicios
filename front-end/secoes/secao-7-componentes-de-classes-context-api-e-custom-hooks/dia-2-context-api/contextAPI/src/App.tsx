import ThemeProvider from './context/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';
import './App.css';

function App() {


  return (
    <ThemeProvider>
      <div className='app'>
      <Header />
      <Image />
      <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
