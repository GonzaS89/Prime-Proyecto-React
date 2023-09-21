import './App.css';
import Testimonio from './componentes/testimonio.js';

function App() {
  return (
    <div className='app'> 
      <div className='contenedor-principal'>
        <h1>Esto es lo que los alumnos de freecodeCamp declararon</h1>
        <Testimonio 
        nombre = 'Jorge Hoyo'
        pais = 'Senegal'
        cargo = 'Frontend'
        empresa = 'Spotify'
        imagen = 'Jorge'
        testimonio = 'El padre se llamaba Víctor y trabajaba en General Motors. Era moreno, algo calvo, delgado y ojos rasgados. Carlos se parecía más a la madre, de origen alemán. Era ama de casa y, en verano, vestía a su hijo con pantalones cortos blancos y remeras rayadas. Andaba en la bicicleta de su padre, que le quedaba grande. Carlos era tímido y callado como su madre, quien lo cuidaba mucho'
        />
      </div>
    </div>
  );
}

export default App;
