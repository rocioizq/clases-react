import Cartas from "../Cartas/Cartas.jsx";
import FinDelJuego from "../FinDelJuego/FinDelJuego.jsx";

export default function ContainerCartas({ cartas, handleClick, turnos, finDelJuego, reiniciarJuego, cartasVolteadas, cartasAcertadas }) {
  return (
    <div className="container-cartas">
      <h1>Memotest</h1>

      {!finDelJuego && (
        <div className="tablero">
          {cartas.map((carta, index) => (
            <Cartas
              key={index}
              emoji={carta.emoji}
              isFlipped={cartasVolteadas.includes(index) || cartasAcertadas.includes(index)}
              handleClick={() => handleClick(index)}
            />
          ))}
        </div>
      )}

      {finDelJuego && (
        <FinDelJuego turnos={turnos} reiniciarJuego={reiniciarJuego} />
      )}
    </div>
  );
}

