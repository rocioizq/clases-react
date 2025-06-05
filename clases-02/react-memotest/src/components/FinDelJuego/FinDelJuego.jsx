export default function FinDelJuego({ turnos, reiniciarJuego }) {
  return (
    <div className="fin-del-juego">
      <h2>¡Fin del juego! Tardaste <strong>{turnos}</strong> turnos en ganar</h2>
      <button className="btn-reinicio" onClick={reiniciarJuego} aria-label="Reiniciar el juego">
        Reiniciar juego
      </button>
    </div>
  );
}
