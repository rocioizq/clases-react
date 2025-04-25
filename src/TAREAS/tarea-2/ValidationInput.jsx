/*
 * Estos componentes están bastante buenos, pero estamos repitiendo mucho código,
 * son prácticamente iguales salvo por un par de diferencias.
 * Por suerte React nos permite compartir esas funcionalidades con muy poco esfuerzo.
 * Este próximo componente debe tener las capacidades de ser cualquiera de los anteriores.
 *
 * (Nuevamente, será conveniente empezar copiando y pegando el componente anterior)
 * Este componente recibirá 1 prop: validation.
 * validation es una función que recibe el valor del componente y devuelve true o false,
 * según si el componente es válido.
 *
 * Si esa función devuelve false, el input deberá tener la clase "input-match".
 *
 * DATO: Pueden usar las siguientes funciones como prueba:
 * - (value) => value.length >= 8;
 *   Esta función chequea que el input tenga más de 8 caracteres.
 *
 * - (value) => !value.match(" ");
 *   Esta función chequea que el input no tenga espacios.
 *
 * - (value) => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
 *   Esta hermosa regex robada de internet chequea que el input sea una dirección de mail válida.
 *
 * Si quieren, pueden agregar una prop extra "isPassword". Si es true el input deberá tener type="password".
 */

import { useState } from "react";

export function ValidationInput({ validation, isPassword  }) {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const isValid = validation(value); 
    const className = isValid ? "input" : "input input-match";

    return (
        <>
            <input type={isPassword ? "password" : "text"}
            value={value}
            className={className}
            onChange={handleChange}
            />
        </>
    )
}