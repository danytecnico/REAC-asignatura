//import logo from './logo.svg';
import './App.css';
//import screen from './Assets/screen1.jpg';
import Saludos from './components/Saludos';
import Tareas from './components/Tareas';
import  "./BackgroundImage.css";

function App() {
  return (
    <div className="background-image">
       <div className="App">
      <h1>PUCESE</h1>
      <Saludos nombre="Dany" apellido="Barrera"/>
      <Tareas/>
      </div>
    </div>
    
  );
}



export default App;



