
/*Los PropTypes, son un modulo que nos ayudará a definir el tipo de dato (string, object, boolean, etc) del atributo que estamos recibiendo en el objeto Prop, ya que lo ideal es que los atributos que tienen el mismo nombre sean del mismo tipo de dato para evitar errores */
/*Instalaremos el modulo npm i prop-types*/
import PropTypes from 'prop-types'

export function UsandoPropsTypes({text, name}){
    if(!text) { /*Si no hay text (variable sin valor asignado) */
        console.error('El texto es requerido') /*Validacion para que el valor de 'text' tenga contenido */
    }
    return <button>
        {text} - {name}
    </button>
}

UsandoPropsTypes.propTypes = {
    text: PropTypes.string.isRequired /*Estamos definiendo que en el Component UsandoPropsTypes, recibiremos el parámetro props.text el cual tiene que ser sí o sí un string. Si es que le pasamos un dato con otro tipo de dato, nos saldrá error.*/
    /*El .isRequired significa que es necesario que exista el atributo 'text'. */
}

UsandoPropsTypes.defaultProps = {
    name : 'Default_User' /*En caso el valor del atributo 'name' no este definido en todos los componentes, podemos ponerle un valor por defecto. */
}