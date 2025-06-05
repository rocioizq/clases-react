/*
 * Este componente debe renderizar un input que cambie de clase cuando contiene tu nombre.
 * Recibirá una prop: nombre (un string con tu nombre).
 * También tendrá un estado: value.
 * value representa el contenido del input. Si escribiste "Hola", value debe ser "Hola".
 * Este input debe tener siempre la clase "input", y cuando `value` incluye tu nombre,
 * también debe tener la clase "input-match".
 * Si completaste bien el componente, verás que al escribir una string que contenga tu nombre,
 * el input cambiará de azul a rojo.
 *
 * DATO: usen la prop "value" para setear el nombre del input y "onChange" como event handler para cambiar el estado.
 * Para obtener el valor del input en el event handler, deberán usar la propiedad `event.target.value`.
 */
import { useState } from "react";

export function MatchNombre({ name }) {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const hasName = value.toLowerCase().includes(name.toLowerCase());
    const className = hasName ? "input input-match" : "input";

    return (
        <>
            <input type="text"
            value={value}
            className={className}
            onChange={handleChange}
            placeholder="Name"
            />
        </>
    )
}