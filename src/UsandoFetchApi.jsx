/*En una aplicacion Frontend es muy raro que los datos se encuentren aquí, por lo que es necesario pedirlo a un servidor o a un Backend*/
/* Comunmente en el campo laboral, nos proporcionan apis que podamos consumir*/
/* Como ejemplo usaremos un servicio de api en la pagina https://jsonplaceholder.typicode.com/, donde encontraremos el link de la api a consumir */
/* Objeto JSON: Es un arreglo de objetos de JS */


// export function UsandoFetchApi (){
//     return (
//         <ul>
//             <li> Title1 </li>
//             <li> Title2 </li>
//         </ul>
//     )
// }

export const UsandoFetchApi = () => {
    return (
        <button onClick = { () => {
            /*Nosotros podemos usar APIs del navegador (como LocalStorage, SesionStorage, Canvas fetch)*/
            /*API Fetch: Permite realizar solicitudes HTTP asíncronas desde el navegador, lo que facilita la comunicación con servidores web y la obtención de datos JSON, XML, HTML u otros tipos de contenido. */
            
            fetch('https://jsonplaceholder.typicode.com/posts123') /*Fetch nos permite traer datos */
                .then(response => response.json()) /*Cuando hacemos una solicitud HTTP utilizando una función como fetch, la respuesta del servidor se obtiene a través del objeto Response, el cual nos proporciona información sobre el estado de la respuesta (como el código de estado HTTP), los encabezados y el cuerpo de la respuesta. En resumen, response es la respuesta completa del servidor a tu solicitud HTTP *//*Despues de traer los datos con el fetch, voy a recibir una respuesta en el objeto Response, y luego lo convertiré en un formato JSON  */ 
                .then(data => console.log(data)) /*Y luego a partir de aqui, recien recibire los datos */ /*La data se refiere a los datos específicos que se extraen del cuerpo de la respuesta HTTP. Este parámetro data es simplemente una convención utilizada para referirse a los datos obtenidos de la respuesta de la solicitud HTTP. Puedes darle el nombre que desees al parámetro de la función de manejo de éxito, pero data es comúnmente usado */
                .catch(error => console.error(error)) /*Un catch en caso de error */
            
        }}
        >
            Traer datos
        </button>
    )
}