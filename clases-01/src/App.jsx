import './App.css'
import { BlogPost } from './TAREAS/tarea-1/BlogPost';
import Tarjeta from './TAREAS/tarea-1/Tarjeta';
import { MatchNombre } from './TAREAS/tarea-2/MatchNombre';
import { PasswordInput } from './TAREAS/tarea-2/PasswordInput';
import { ValidationInput } from './TAREAS/tarea-2/ValidationInput';
import { CheckboxList } from './TAREAS/tarea-3/CheckboxList';
import { UncontrolledCheckbox } from './TAREAS/tarea-3/UncontrolledCheckbox';
// import { ControlledCheckbox } from './TAREAS/tarea-4/ControlledCheckbox';
// import { CheckboxListWithState } from './TAREAS/tarea-4/ControlledCheckbox';

function App() {
  return (
    <>
    <Tarjeta
      nombre="Rocío Izquierdo Lammoglia"
      titulo="Frontend Developer"
      imagen="https://avatars.githubusercontent.com/u/53886101?v=4"
    />

    <BlogPost
      titulo="Ardillas"
      parrafos={`Hoy vi una ardilla.
        La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
        Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
      autor={{
      nombre: "Rocío Izquierdo Lammoglia",
      titulo: "Frontend Developer",
      imagen:"https://avatars.githubusercontent.com/u/53886101?v=4"
    }}
    />

    <MatchNombre
      name="Rocio"
    />

    <PasswordInput
      minLength={8}
    />

    {<ValidationInput
      validation={value => value === "Tarea 2"}
    /> }

    <UncontrolledCheckbox 
      name={"UncontrolledCheckbox"}
      initialValue={false}
    />

    <CheckboxList 
      items= { {
          uno:false,
          dos:true,
          tres: false
          }
        }
    />

    {/* <ControlledCheckbox 
      name={CheckboxList}
      value={true}
      onChange={handleChange}
    />  */}


    {/* <CheckboxListWithState
        items={{
          uno: false,
          dos: true,
          tres: false,
        }}
      /> */}
  </>
  )
}

export default App
