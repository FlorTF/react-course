/* 
- Event Handler: En español, manejador de eventos. Este concepto nos permite hacer algo cuando ocurre un determinado evento en una interfaz.
- Ejemplo: Ejecutar determinada lógica solamente despues de hacer clic(evento onClick) a un elemento HTML.
- Cada elemento HTML tiene sus propios Eventos.
- Eventos: onClick, onChange, onSubmit, onKeyDown, onKeyPress, etc
*/

/*El evento 'onClick' se define en el elemento HTML que queremos que lo desecadene: <button>. La lógica que va dentro del evento se define mediante una funcion*/

const handleChange = (event) => {
  console.log(event.target.value); /*Definimos la funcion fuera de la etiqueta HTML. Nombraremos la funcion en relacion con el evento. Ejemplo: El evento onChange, tendrá la lógica en la funcion nombrada handleChange()*/
};

export function EventHandler() {
  return (
    <>
      <button
        onClick={function () {
          console.log("Click");
        }}
      >
        Button
      </button>

      {/*  Cuando se ejecuta la funcion, lo que me ofrecen los eventos en general, es informacion acerca del evento a traves de un objeto de JS. Si yo quiero recibir esa informacion a traves del objeto lo debo poner en los parámtros de la funcion como e, event o evento */}
      <input
        onChange={function (event) {
          console.log(event); /*Veremos la informacion del evento onChange en consola. Recordar que la lógica de la funcion 'console.log(event)', solo se ejecutará despues de activar el evento onChange asignado al input*/
          /*Podemos acceder a la informacion del evento como si estuviesemos invocando propiedades del objeto 'event'. Por ejemplo, podemos capturar lo que escribe el usuario en el input mediante: event.target.value */
        }}
      />

    
      <input
        onChange={(event) => {
          console.log(event); /*Podemos definir la lógica que se ejecutará despues del evento, mediante una funcion flecha*/
        }}
      />

      <input onChange={handleChange} /> 
      {/* Podemos definir la funcion fuera de la etiqueta HTML que tiene asignado el evento. Cuando se ejecuta un cambio (onChange), lo manejará la funcion (handleChange) */}

        <form onSubmit={
            /*Los formularios se crearon para que podamos enviar datos al backend o a un servidor*/
            /*El evento onSubmit hace que al no haber un backend, los datos se envien al mismo localhost:3000 lo que hace que se refresque la página y solo aparezca momentaneamente el console.log("Sending information") */
            (event) => {
                event.preventDefault() /*Quita el comportamiento por defecto del evento, en este caso del evento onSubmit de la etiqueta HTML 'form'. Ya no se actualizará la página despues del evento onSubmit*/
                console.log("Sending information")

            }
        }>
            <h1>Register User</h1>
            <button>Send</button>
        </form>

    </>
  );
}
