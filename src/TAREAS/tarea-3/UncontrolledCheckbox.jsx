/*
 * Este componente debe renderizar un checkbox (<input type="checkbox" />) que se seleccione o des-seleccione al hacer click.
 * Debe tener su propio estado (una variable de tipo booleano que indique si el componente está seleccionado o no)
 * Recibirá dos props: name e initialValue.
 * name indica el nombre del checkbox, será un string que debe ser renderizado a su lado.
 * initialValue es un booleano que indica el valor inicial del checkbox.
 * onChange es una función que se debe disparar cuando el checkbox se selecciona (o des-selecciona), y debe tener como parámetro el valor nuevo del checkbox.
 *
 * DATO: la prop que define si un <input type="checkbox" /> está seleccionado es "checked"
 */

import { useState } from "react";

export function UncontrolledCheckbox({ name, initialValue }) {
    const [checked, setChecked] = useState(initialValue);

    const handleChange = () => {
        setChecked(!checked);
    }

    return (
        <div className="uncontrolledCheckbox">
            <label htmlFor={name}>{name}</label>
            <input type="checkbox"
            checked={checked}
            onChange={handleChange}
            name={name}
            id={name}
            />

        </div>
    )
}