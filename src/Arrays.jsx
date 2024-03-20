/* https://robohash.org/ es un servicio que me genera imagenes aleatorias*/

import { BiSolidInbox } from "react-icons/bi";

/*El arreglo 'users' tiene esta estructura, ya que comunmemte recibimos los datos como objetos JSON*/
const users = [
  {
    id: 1,
    name: "User1",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "User2",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "User3",
    image: "https://robohash.org/user3",
  },
];

export function Arrays() {
  /* Para recorrer un arreglo no usaremos un bucle for. En React existe una forma mas comoda y sencilla, que es a traves de metodos de arreglos como: map, reduce, filter, find, etc. */

  /* map():
     Sirve para recorrer elementos del arreglo. Dentro de los parentesis de map, habrá una funcion al que le pondremos como parametro un iterador que recorra el arreglo (cualquier nombre), y que nos retornará el dato que queramos.
     const names = ['user1', 'user2', 'user3']
     Forma 1: names.map(function (name) {return 'Hola ' + name})
     Forma 2: names.map((name) => return 'Hola ' + name)

     El map() a diferencia del bucle for, no modificará el arreglo inicial. Esto significa que si volvemos a ejecutar el arreglo, este se mostrará sin cambios. A menos, que guardemos el nuevo arreglo en una nueva constante.
     const holaNames = names.map(function (name) {return 'Hola ' + name})
    
    */

  /*  user: Es el iterador que pasa por cada uno de los elementos del arreglo
      index: Es la posicion de cada uno de los elementos del arreglo (es funcionamiento interno de React). Cuando necesitemos mostrar multiples elementos, debemos pasarle ese 'key'.
      Cuando recorramos elementos, el quien debe contener el 'key', es el primer elemento que contenga al resto
    */
  return users.map((user, index) => {
    return (
      <div key={index}>
        <h1> {user.name}</h1>
        <img src={user.image}></img>
      </div>
    );
  });
}
