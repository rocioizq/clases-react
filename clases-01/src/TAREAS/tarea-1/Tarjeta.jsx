/*                                    TAREA 1
 * Para empezar, hagan que el componente devuelva este fragmento de html,
 * con los cambios necesarios para que sea compatible con JSX
 *
 * <div class="tarjeta">
 *  <img
 *   src="https://avatars2.githubusercontent.com/u/14203988?s=460&v=4"
 *   alt="Foto de perfil"
 *   class="tarjeta-img"
 *  />
 *  <div class="tarjeta-data">
 *   <header class="tarjeta-data-header">Julián Absatz</header>
 *   <span>Programador Front End</span>
 *  </div>
 * </div>
 *
 * Luego, refactoricen el componente para que en vez de tener mi nombre, titulo e imagen, tengan los suyos.
 * Para hacer esto, usaremos las props del componente.
 * Este componente recibirá 3 props: nombre, titulo e imagen.
 * nombre será un string con su nombre
 * titulo será un string con su título
 * imagen será un string con la url de su foto de perfil.
 *
 * Para recrear el componente con mis datos por ejemplo, deberíamos renderizar el componente así:
 * <Tarjeta
 *   nombre="Julián Absatz"
 *   titulo="Programador Front End"
 *   imagen="https://avatars2.githubusercontent.com/u/14203988?s=460&v=4"
 * />
 *
 * Pueden reemplazar estos valores con sus datos y así tener su tarjeta personal
 * (aunque lamentablemente no veremos como imprimirla en este curso).
 *
 * Si no quieren poner una foto suya, pueden tomar la URL de su imagen de perfil de github, como hice yo.
 */

export default function Tarjeta(props) {
    return (
        <div className="tarjeta">
            <img src={props.imagen} alt="Foto de perfil" className="tarjeta-img" />
            <div className="tarjeta-data">
                <header className="tarjeta-data-header">{props.nombre}</header>
                <span>{props.titulo}</span>
            </div>
        </div>
    );
}
