import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormularioPelicula from './components/Formulario';
import { Container } from 'react-bootstrap';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Container>
<FormularioPelicula>

</FormularioPelicula>
</Container>
     
    </>
  )
}

export default App;
