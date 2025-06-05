/*
 * El esqueleto de este componente será nuestro primer post en un blog.
 * Ya tiene un esqueleto diseñado, por lo que hay que hacer solamente unos pequeños cambios:
 *
 * Reemplazar "Titulo de mi post" por una prop llamada "titulo" que venga desde arriba.
 * Reemplazar los tres párrafos de texto por una prop llamada "parrafos".
 * Esta prop será un string con saltos de texto para representar los diferentes párrafos.
 * Para hacer saltos de texto en un string común, pueden agregar \n donde los quieran agregar.
 * 
 * Ejemplo: "Hoy vi una ardilla.\nLa ardilla era negra."
 * 
 * O si prefieren, pueden hacerlo con un template string:

 `Hoy vi una ardilla.
La ardilla era negra.`

 * Sin embargo, verán que al tratar de imprimir esto, todo aparecerá dentro del mismo párrafo.
 * Por como funciona HTML, los diferentes párrafos deben estar en diferentes elementos <p>.
 * Podemos lograr este efecto haciendo `parrafo.split('\n').map()` y devolver un 
 * <p className="post-paragraph">{...}</p> en cada posición del array.
 * 
 * Si quieren un ejemplo de esto, pueden ver el archivo src/components/Page.js
 * 
 * Una vez que tengamos hecho esto, solo nos queda reemplazar los valores de la tarjeta.
 * Estos valores deberían venir por las props también, pero queda raro pasarle 
 * cosas como "nombre" o "imagen de perfil" a un componente "BlogPost".
 * 
 * Lo que haremos para evitar eso es pasar como prop un objeto "autor" que tenga la siguiente pinta:
 * {
 *   nombre: "Tu nombre",
 *   titulo: "Tu título",
 *   imagen: "URL de tu imagen"
 * }
 * 
 * Luego se le puede pasar a Tarjeta esas props haciendo <Tarjeta nombre={props.autor.nombre} ... />
 * 
 * Existe una forma más corta de hacerlo, escribiendo <Tarjeta {...props.autor} />.
 * Esto se llama object spread, no estoy seguro si lo llegaré a explicar en la clase o si lo habrán visto en algún lado.
 * Si no entienden como funciona, es preferible hacerlo de la manera anterior.
 * Veremos qué significa esta sintáxis en la próxima clase, si no lo hemos hecho aún.
 * 
 * Para recrear el BlogPost terminado con los datos originales, deberían poder usar este elemento:
 * 

<BlogPost
  titulo="Ardillas"
  parrafos={`Hoy vi una ardilla.
La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
  autor={{
    nombre: "Tu nombre",
    titulo: "Tu título",
    imagen: "URL de tu imagen"
  }}
/>

*/

import Tarjeta from './Tarjeta';

export function BlogPost(props) {
    return (
        <div className="contenedor">
            <div className="noticia">
                <h1>{props.titulo}</h1>
                {props.parrafos.split('\n').map((parrafo, i) => (
                    <p className="post-paragraph" key={i}>{parrafo}</p>
                ))}
                <Tarjeta {...props.autor} />
            </div>
        </div>
    );
}
