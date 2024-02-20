import logo from './logo.svg';
import './App.css';
import Perfil from './Componentes/Perfil';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
       <h1> Mis cuentas favoritas de Youtube son:</h1>
       <Perfil
       nombre='Brais Moure'
       pais='España'
       imagen='brais'
       cargo='Ingeniero de Software'
       empresa='Fundador de Moure Dev'
       resena='Es un desarrollador español que comparte recursos educativos en Youtube'
       />

       <Perfil
       nombre='Carlos Azaustre'
       pais='España'
       imagen='carlos'
       cargo='Ingeniero de Software'
       empresa='carlosazaustre.es'
       resena='Es un desarrollador español que comparte recursos educativos en Youtube'
       />

      <Perfil
       nombre='Nicolás Shurmann'
       pais='Nueva Zelanda'
       imagen='nicolas'
       cargo='Ingeniero de Software'
       empresa='holamundo.io'
       resena='Es un desarrollador neozelandés que comparte recursos educativos en Youtube'
       />  

    </div>

  </div>
  )
};

export default App;
