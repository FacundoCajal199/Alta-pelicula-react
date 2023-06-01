import { Form,Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import '../App.css';
const FormularioPelicula = () => {

    const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const storedPeliculas = localStorage.getItem("peliculas");
    if (storedPeliculas) {
      setPeliculas(JSON.parse(storedPeliculas));
    }
  }, []);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre && descripcion && genero) {
      const nuevaPelicula = {
        nombre,
        descripcion,
        genero
      };

      const updatedPeliculas = [...peliculas, nuevaPelicula];
      setPeliculas(updatedPeliculas);
      localStorage.setItem("peliculas", JSON.stringify(updatedPeliculas));

      setNombre("");
      setDescripcion("");
      setGenero("");
    } else {
      alert("Completa todos los campos del formulario.");
    }
  };


  return (
    <>
     <section className='mt'>
      <h1>Administrador</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={handleNombreChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={3} placeholder="Descripcion"  value={descripcion}
              onChange={handleDescripcionChange} />
        </Form.Group>
        <Form.Label>Elige un genero</Form.Label>
        <Form.Select aria-label="Default select example" value={genero} onChange={handleGeneroChange}>
          <option value="Accion">Accion</option>
          <option value="Terror">Terror</option>
          <option value="Comedia">Comedia</option>
          <option value="Drama">Drama</option>
        </Form.Select>
        <Button variant="warning" className='mt-3 text-weight' type="submit">Enviar</Button>
      </Form>
     </section>
      <div className='mt-5'>
      <h2>Películas Agregadas:</h2>
        {peliculas.map((pelicula, index) => (
          <div className="card mb-4 mt-3 bg-edit" key={index}>
            <span>Nombre:</span>
            <h4>{pelicula.nombre}</h4>
            <span>Descripcion:</span>
            <p>{pelicula.descripcion}</p>
            
            <span>Genero:</span>
            <button className='btn-categorias'>{pelicula.genero}</button>
          </div>
        ))}
      </div>
      </>
  );
};
export default FormularioPelicula;
