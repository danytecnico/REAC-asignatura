//Componente que muestra las actividades (tareas) diarias de una persona
//Componente que muestra las actividades (tareas) diarias de una persona
import React, {useState} from "react";
import { datos } from "./datos";

function Tareas() {
  //const listadoTareas = datos;
  const [listadoTareas, setListadoTareas] = useState(datos);

  console.log("Lista de tareas");
  //console.log(listadoTareas);

  
  const eliminarHandler =(item) => {
    if(window.confirm("Confirme que desea eliminar esta tarea ?"))
    {
      //console.log("dato a eliminar ", item);
      const nuevalista = listadoTareas.filter( tarea => {
      return tarea.Asignatura !==item.Asignatura;
      });
      //console.log("Nueva lista", nuevalista);
      setListadoTareas(nuevalista);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          {listadoTareas.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card mt-4">
                  <div className="card" style={{backgroundColor: '#20B2AA'}}>
                    <h3><strong>{item.Asignatura}</strong></h3>
                    
                  </div>
                  
                  <div className="card" style={{backgroundColor: '#FAEBD7'}}>
                    <p><strong>NRC: </strong>{item.NRC}</p>
                    <p><strong>Créditos: </strong>{item.Créditos}</p>
                    <p><strong>Parcial1: </strong>{item.Parcial1}</p>
                    <p><strong>Parcial2: </strong>{item.Parcial2}</p>
                  </div>

                  <div className="card-footer">
                    <button className="btn btn-primary" style={{backgroundColor: '#20B2AA'}} onClick={() => eliminarHandler(item)}>Eliminar</button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tareas;