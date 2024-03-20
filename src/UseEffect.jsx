/*useEffect:
Este Hook nos sirve cuando tengamos cambios en nuestra interfaz. UseEffect va a ejecutar algo, cada vez que exista un cambio en la página
Es el código que se ejecuta despues de que se actualiza un estado (especificado en useState). Se debe especificar en el arreglo cual es la variable ('mensaje', 'counter') que queremos que React tome en cuenta para que se ejecute el código.  
.

*/

import { useState, useEffect } from "react"


export function UseEffect () {
    const [mensaje, setMensaje] = useState('')
    const [counter, setCounter] = useState(0)

    /*useEffect espera como parámetro dos elementos:
        - funcion: Que se ejecutará cada que el componente (donde se encuentra el useEffect) se renderice o se actualice. Por ejemplo, cada que se modifica el input de este componente, React verifica si hubo un cambio en el componente, y si sí lo hay, entonces se ejecuta la lógica dentro de useEffect.
        - arreglo: Indica las dependencias que tomará en cuenta useEffect para que se ejecute la funcion. Si el arreglo se encuentra vacio indica que solo se ejecutará la funcion una sola vez (solo cuando el componente se renderiza por primera vez)
    */
    useEffect( function(){  
        console.log("Está ejecutandose useEffect")

    }, [counter]) /*Se ejecutará la logica del useEffect, solo cuando la variable 'counter' cambie de estado. */

    return (<div>
        {/* Input */}
        <input onChange={ (evento) => {
            setMensaje(evento.target.value) 
        }} />
        <button onClick={ () => { 
            alert('El mensaje es: ' +mensaje) 
        }}>
            Save
        </button>
        <hr/>
        {/*Contador */}
        <h1> Counter: {counter} </h1>
        <button onClick={() => {
            return setCounter(counter + 1)
        }} >Incrementar</button>

    </div>)
}