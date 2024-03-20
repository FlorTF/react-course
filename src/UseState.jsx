/*useState:
Para actualizar el estado (valor de 'counter') tengo que usar un Hook de React (una funcion que me da React, todos los Hooks de React son funciones), para ello debo instalar la siguiente biblioteca (realmente es una funcion): */
import {useState} from "react"


export function UseState() {
  /*Ejemplo1: Contador */
  //const [counter, setCounter] = useState(0) 
  /*Al ejecutar la funcion useState() me devuelve un arreglo de dos elementos:
  - variable
  - funcion, lógica que permite actualizar la variable.
  Entonces, para poder crear un elemento que pueda cambiar su valor, debo extraer algunos valores a partir del arreglo que nos devuelve useState(). 
  Le decimos que el valor inicial de 'counter' es 0 (cuando cargue la aplicació), al ingresarlo como parámetro en la funcion useState(0).
  */

  /*Ejemplo2: Input */
  const [mensaje, setMensaje] = useState('')
  /*El valor de 'mensaje' seria undefined si es que los parentesis de useState estan vacios, es por ello que lo inicializaremos con '' para indicar que es un string vacio. A medida que tipeen dentro del input, se estará llenando el valor de 'mensaje'*/
   
  return (
    /*Ejemplo1: Contador */
    // <div>
    //   <h1>Counter: {counter}</h1>
    //   <button
    //     onClick={() => {
    //       setCounter( counter + 1) /*Usaremos setCounter para cambiar el valor inicial de 'counter' = 0, hacia el nuevo valor establecido en la funcion setCounter(counter + 1), es decir el nuevo valor sumará 1 cada que active el evento onClick */
    //       return { counter }; /*Re */
    //     }}
      
    //     Sumar
    //   </button>

    //   <button onClick = {() => {
    //         setCounter ( counter - 1 )
    //         return {counter}
    //     }}>
    //     Restar
    //   </button>

    //   <button onClick={
    //     () => {
    //         setCounter(0) /*Modificamos el valor de 'counter' a 0, mediante el 'setCounter()' */
    //     }
    //   } >
    //     Reinciar
    //   </button>
    // </div>

    /*Ejemplo2: Input */
    <div>
        <input onChange={ (evento) => {
            setMensaje(evento.target.value) /*Usaremos el setMensaje() para modificar el valor de 'mensaje', el nuevo valor de 'mensaje', será lo que iremos tomando del valor que tipeemos en el 'input' */
    
        }} />
        <button onClick={ () => { 
            alert('El mensaje es: ' +mensaje) /*Cuando hagamos click en button, mostrará una alerta que nos muestre el nuevo valor de 'mensaje' (despues de haber sido modificado por 'setMensaje()') */
        }}>
            Save
        </button>

    </div>

  );
}
