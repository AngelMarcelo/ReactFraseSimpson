import './App.css';
import logo from './components/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {button} from 'react-bootstrap'; 
import Frase from './components/Frase';


function App() {
  return (
    <section className='container my-5 d-flex flex-column aling-item-center'>
      <img src={logo} alt="logo de los simpson" />
      <button variant='warning' className 'w-75 my-5'>Obtener frase</button>
      <Frase></Frase>
    </section>
  );
}

export default App;
