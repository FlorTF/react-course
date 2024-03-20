

/*Lo ideal es tener un archivo JS por cada Component existente*/
/*Los Components se nombren con letra mayúscula al inicio, de esta manera podemos diferenciar los componentes JSX de HTML. Por ejemplo, diferenciar una etiqueta <body> </body> de un componente <Body> </Body> */
/*Los Components tienen la extension jsx para diferenciarlo de los archivos netamente JS */

export function Greeting() {
    /*Como regla, siempre debe haber un elemento que contenga al resto, en este caso el <div> */
    return <div>
        {/* En React, se usa la sintaxis llamada JSX(combinacion de JS y HTML), el cual nos permite que dentro de un archivo JS podramos retornar porciones de HTML para que al final sea convertido en JS puro*/}
        <h1>Component</h1>
        <p>Lorem123</p>
    </div>
}

export function UserCard(){
    return <h1> UserCard</h1>
}