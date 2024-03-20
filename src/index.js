// Es necesario que este archivo se llame index.js, para que React sepa que este es archivo principal que debe cargar

import React from "react"; /*Estamos importando la biblioteca React */
import ReactDOM from "react-dom/client"; /*React sirve para crear interfaces de usuarios en aplicaciones web, mobile y de escritorio. En este caso crearemos una aplicacion web, por lo que importaremos ReactDom para indicar que estaremos manipulando el DOM*/

import {
  Greeting,
  UserCard,
} from "./Greeting"; /* Las llaves sirven para indicar que solamente importaremos la funcion Greeting del archivo Greeting el cual no es necesario ponerle la extencion .js. Lo mismo con UserCard*/
import ProductNuevoNombre from "./Product"; /*Con el export default podemos cambiar el nombre del componente que se exportó. Va sin llaves porque no se esta exportando nada individualmente*/

import { UsandoJSX } from "./UsandoJSX";
import { UsandoProps } from "./UsandoProps";
import { UsandoPropsTypes } from "./UsandoPropsTypes";
import { ImplementandoEstilos } from "./ImplementandoEstilos";
import {OtraFormaComponent} from "./OtraFormaComponent"
import {EventHandler} from "./EventHandlers"
import {UsandoFetchApi} from "./UsandoFetchApi"
import { ModulosTerceros } from "./ModulosTerceros"
import {Arrays} from "./Arrays"
import {UseState} from "./UseState"
import { UseEffect } from "./UseEffect"

const rootElement =
  document.getElementById(
    "root"
  ); /*Seleccionamos el div id:"root" donde se renderizará nuestra aplicacion, para despues modificarlo con código JS*/

const root =
  ReactDOM.createRoot(
    rootElement
  ); /*Creamos un elemento root, dentro de los parentesis se coloca el contenedor div id:"root". Esto nos devolverá una aplicacion inicial de React. Tambien llamado Root Component */

/*Segun React, una aplicacion web esta formada de multiples partes(Navbar, Sidebar, etc) llamadas Components, entonces debemos dividir esas partes para que mantenerlas individualemnte */
/*Los componentes son porciones de una interfaz mucho más grande */
/*Los componentes son reutilizables */
/*Root Component: Es necesario tener un component inicial, que contenga a los demás componentes */
/*Los componentes son funciones que retornan alguna interfaz con etiquetas HTML, esto es posible gracias a React. Ya que con JS esto no se puede hacer*/



root.render(
  /*Siempre debe haber un elemento padre que contenga los componentes. Puede ser una etiqueta HTML como el <div>, o un Fragment <> </> que son etiquetas sin contenido, los cuales solo sirven como un contenedor, pero no se renderiza en el DOM. Los fragment hacen posible que se cumpla la regla de que una etiqueta contenga a las otras*/

  //Forma1
  //Greeting() /*Podemos llamar al componente como si fuese una funcion*/

  //Forma2
  //<div>{Greeting()}</div>/*Para incluir código JS dentro de código HTML usaremos llaves*/

  //Forma3
  //<div><Greeting></Greeting></div> /*Es otra manera de llamar componentes*/

  //Forma4
  // <>
  //     <Greeting/>
  //     <UserCard/>
  //     <ProductNuevoNombre/>
  // </> /*Self Closing Tags: Etiquetas que se cierran así mismas*/
  //<UsandoJSX/>

  //Props 1
  // <>
  // <UsandoProps title = "React" name="User1"/>
  // {/* Recordar que el Component UsandoProps() es una funcion, al cual podemos incorporarle parámetros de la forma var = "contenido", el cual enviara este parámetro a traves de las props, hacia donde esta definido el Component UsandoProps.jsx*/
  // /* Los parámetros de la funcion UsandoProps() se escribe en forma de atributos, ya que la sintaxis son de etiquetas HTML. */}
  // <UsandoProps title = "JSX" name="User2"/>
  // <UsandoProps title = "JS"/>
  // <UsandoProps title = "World"/>
  // </>

  //Props 2
//   <>
//     <UsandoProps
//       name="User_1"
//       amount={5000}
//       married={false}
//       points={[99, 33.3, 22.2]}
//       address={{ street: "123 Main Street", city: "New York" }}
//       greet={function () { alert('Hello') }}
//     />
//     <UsandoProps
//       name="User_2"
//       amount={800}
//       married={true}
//       points={[20, 15.5]}
//       address={{ street: "123 Third Street", city: "Miami" }}
//       greet={function () { alert('Hello') }}
//     />
//   </>

    //Props Types
    //<>
    /* Lo ideal es que los atributos (que se enviaran como parámetro 'props' al componente UsandoPropsTypes.jsx) sean del mismo tipo para que no hayan errores. Al instalar el modulo PropTypes podemos definir el tipo de dato de los atributos, para evitar este tipo de errores*/
    //<UsandoPropsTypes text = 'Click me'/>
    //<UsandoPropsTypes text = 'Pay'/>
    //<UsandoPropsTypes text = 'Go to' name = 'User_1'/>
    //</>

    //Implementando Estilos
    // <>
    // <ImplementandoEstilos ready = {false}/>
    // </>

    //Otra forma de crear componentes
    // <>
    // <OtraFormaComponent/>
    // </>

    //Event Handlers
    // <>
    // <EventHandler/>
    // </>

    //UsandoFetchApi
    // <>
    // <UsandoFetchApi/>
    // </>

    //Modulos de terceros
    // <>
    // <ModulosTerceros/>
    // </>

    //Arrays
    // <>
    // <Arrays/>
    // </>

    //useState
    // <>
    // <UseState/>
    // </>
    <>
    <UseEffect/>
    </>

); /*Es para indicarle a React, lo que colocaremos dentro de mi aplicación. Dentro del parentesis se deben colocar elementos hijos, es decir elementos HTML */
