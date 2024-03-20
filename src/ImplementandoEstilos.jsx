import './implementandoEstilos-Style.css' /*Importamos los estilos del archivo CSS implementandoEstilos-Style.css*/

//Estilos en clases CSS
// export function ImplementandoEstilos() {
//     return (
//       <div className='card' > 
//       {/* En React, para asignar clases a las etiquetas HTML, usamos el atributo className */}
//         <h1  >First Task</h1>
//         <p> Task Completed</p>
//       </div>
//     );
//   }


//Estilos en Linea
//Forma 1
/*Estilos en Linea: tal como HTML, podemos agregar la propiedad style en la etiqueta HTML. El contenido de 'style' debe estar en llaves para que pueda leer codigo de JS, y dentro debe haber un objeto que contenga los pares de clave y valor muy similares a las reglas de CSS  */
// export function ImplementandoEstilos() {
//   return (
//     <div style={{ 
//         background: "#202020", 
//         color: "#fff", 
//         padding: "20px" }}>
//       <h1 style={{
//         fontWeight: 'lighter'
//       }} >First Task</h1>
//       <p> Task Completed</p>
//     </div>
//   );
// }

//Forma 2
/*Recordar que el contenido de 'style' es código JS, por lo tanto, puedo guardar el objeto en una variable. Al guardar estilos en una variable, podemos usar una condicional que muestre el estilo 1 en caso sí se cumpla o que muestre el estilo 2 en caso no se cumpla.*/
// const cardStyle = {
//     background: "#202020", 
//     color: "#fff", 
//     padding: "20px"
// }

// const titleStyle = {
//     fontWeight: 'lighter'
// }

// export function ImplementandoEstilos() {
//     return (
//       <div style={cardStyle}>
//         <h1 style={titleStyle} >First Task</h1>
//         <p> Task Completed</p>
//       </div>
//     );
//   }

//Mostrando estilos condicionalmente
//Forma 1: Con estilos en linea
// export function ImplementandoEstilos({ready}) { /*ready es una atributo del objeto props, el cual será definido como booleano */
//     return (
//       <div className='card' > 
//       <h1 >First Task</h1>
//         <span style = {ready ? {background: 'green'} : {background: 'red'}}>{/* Si ready es true, coloca un tipo de estilo fondo verde, caso contrario, coloca otro tipo de estilo fondo rojo*/}
            
//             {ready ? "Task Completed" : "Task Incompleted"}
//             {/* La etiqueta span tiene dentro un texto, que se renderizará dependiendo del valor de ready */
//             /* ready === true ? -> Como 'ready' no esta definido, será false y nos mostrará "Task Incompleted" */
//             /* ready ? -> Si reducimos el codigo del condicional, este se tomará como true y nos mostrará "Task Completed" */
//             }

//         </span> 
//       </div>
//     );
//   }

//Forma 2: Con clases
export function ImplementandoEstilos({ready}) { /*ready es una atributo del objeto props, el cual será definido como booleano */
    return (
      <div className='card' > 
      <h1 >First Task</h1>
        <span className={ ready ? 'bg-green' : 'bg-red'}> {/* Si ready es true, llama la clase bg-green, caso contrario, coloca se llama la clase bg-red*/}
            
            {ready ? "Task Completed" : "Task Incompleted"}
            {/* La etiqueta span tiene dentro un texto, que se renderizará dependiendo del valor de ready */
            /* ready === true ? -> Como 'ready' no esta definido, será false y nos mostrará "Task Incompleted" */
            /* ready ? -> Si reducimos el codigo del condicional, este se tomará como true y nos mostrará "Task Completed" */
            }

        </span> 
      </div>
    );
  }

  /*Otras formas de implementar estilos en React es con frameworks de CSS: 
  - Material
  - Bootsrap
  - Tailwind

  */

