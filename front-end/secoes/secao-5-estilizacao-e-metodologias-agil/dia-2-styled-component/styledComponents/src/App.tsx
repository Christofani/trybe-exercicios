import './App.css'
import { Header, Container, GloalStyle, Button, Title} from './styled'; 
import { ThemeProvider } from 'styled-components';
import CardCompo from './components/Card';


function App() {
 const theme = {
    borderColor: '#1A1B1C',
    textColor: '#1FB621'
  }
 const bgColor = '#1FB621'
  return (
    <div>
      <GloalStyle />
      <ThemeProvider theme={theme}>
      <Header>
        <h1>My React App</h1>
      </Header>

      <CardCompo />

      <Container>
        <p>Conteúdo</p>
      </Container>

     <Button color={bgColor}>
        Clique aqui
     </Button>

     <Title>
        Título
     </Title>
      </ThemeProvider>
        
    </div>
  )
}

export default App;
