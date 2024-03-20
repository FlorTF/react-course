export function UsandoJSX() {
    //Ejemplo1
    // const name = 'user'
    // return <h1>{name}</h1> /*Para interpretar codigo JS en HTML, usaremos llaves
    //Ejemplo2
    // const married = false
    // return(
    //     <div><h1>{married.toString(married)}</h1></div> /* toString sirve para convertir un booleano a string */
    // )
    //Ejemplo2.1
    //const married = false
    // if(married){
    //     return <h1>Im dev</h1>
    // }else{
    //     return <h1>Im not dev</h1>
    // }
    //Ejemplo3
    // function add(x, y){ /*Podemos usar funciones dentro de un componente o funcion */
    //     return x + y
    // }
    // return (
    //     <div>
    //         <h1> {add(10, 20)} </h1>
    //     </div>
    // )
    //Ejemplo4
    // const user = {
    //     firstName: 'user',
    //     lastname: 'Admin'
    // }
    // return <h1> {JSON.stringify(user)}</h1> /* Dentro de <h1> solo se aceptan React childs, es decir más etiquetas HTML o algun texto, por lo que convertiremos el objeto user en un texto*/
  }