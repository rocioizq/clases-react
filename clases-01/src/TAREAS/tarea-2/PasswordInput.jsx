/*
 * Componentes como este son usados a menudo para hacer validaciones de inputs
 * sin tener que hacer click en un botón. Por ejemplo, se podría hacer una validación
 * para ver que una contraseña no sea más corta de lo que se espera.
 *
 * De hecho, hagamos exactamente eso.
 *
 * Este componente será muy parecido al anterior, de hecho pueden copiar y pegar lo que hicieron.
 * La diferencia es que en vez de recibir "nombre", este componente recibirá la prop "minLength".
 * Esta prop es un número que representa la longitud mínima de la contraseña.
 * Si nuestro `value` es menor que `minLength`, input deberá tener la clase "input-match".
 *
 * Y ya que estamos, agreguémosle la prop type="password" al input,
 * así tendrá la pinta de una verdadera contraseña.
 *
 * Si hicieron todo bien, el input se pondrá rojo si no pasaron el tamaño mínimo de la contraseña.
 */

import { useState } from "react";

export function PasswordInput({ minLength }) {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const isPasswordValid = value.length < minLength;
    const className = isPasswordValid ? "input input-match" : "input";

    return (
        <>
            <input type="password"
            value={value}
            className={className}
            onChange={handleChange}
            placeholder="Password"
            />
        </>
    )
}