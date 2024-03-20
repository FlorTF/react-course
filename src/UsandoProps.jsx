/*Las Props nos ayuda a cambiar datos internamente en un Component. Si queremos que cada Component tenga un dato distinto de otro, tenemos que pasarle el dato a traves de las props, en forma de parámetro*/
/*Los Props pueden pasarse de diferentes maneras:
    name = "User", amount={5000}, married={true}, points={[99, 33.3, 22.2]}, address={{street: '123 Main Street', city: 'New York'}}, greet={function () { alert('Hello') }}
*/

//Forma 1
// export function UsandoProps(props){ /*Al ponerle el parámetro props, es porque estamos esperando el dato que se envia desde el Component <UsandoProps title = "hola"/> definido en el index.js */
//     console.log(props) /*Nos muestra las multiples propiedades que nos estan enviando*//*Nos muestra un objeto que contiene el parámetro definido individualmente que se esta enviando desde el Componente <UsandoProps title = "hola"/> en index.js*/
//     return (<h1>Prop {props.title}</h1>) /*Parentesis para traer código JS entre etiquetas HTML */
// }

//Forma 2
/*Sabemos que props es un objeto, el cual podemos estructurarlo y solo traer el valor de la propiedad 'title' y 'user' */
// export function UsandoProps({title, name = "User"}){ /* En caso el valor de name no este definido en los demás Components, tendremos el valor de "User" por defecto */
//     return (<h1>Props {title} says {name}</h1>)
// }

//Forma 3
export function UsandoProps(props){
    console.log(props)
    return (<div>
        <h1>{props.name}</h1>
        <p>${props.amount}</p>
        <p>{props.married ? 'married': 'single'}</p>
        <ul>
            <li>City: {props.address.city}</li>
            <li>Street: {props.address.street}</li>
        </ul>
        
    </div>)
}