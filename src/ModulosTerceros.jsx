/*Modulos de Terceros

En una aplicacion, no siempre tenemos que crear todo desde 0, ya que existen paquetes que pueden integrarse facilmente en el proyecto.
Por ejemplo:
 - Editores de texto creados por Facebook o comunidades Open Source
 - Notificaciones que lucen bien

Estos modulos de terceros, se importan como si fuesen componentes de React.
1. Instalacion: npm install react-icons
2. Ubicarse en un Component (al que queremos agregarle este modulo de tecero) e importar el módulo de terceros instalado (leer documentacion, cada modulo de terceros tiene su propias reglas) 
3. Ya podemos usar el módulo de terceros como si fuese un componente más
*/

import { BiAtom, BiBowlRice } from "react-icons/bi";

export function ModulosTerceros () {
    return(
        <button>
            <BiAtom />
            My Button
            <BiBowlRice />
        </button>
    )
}