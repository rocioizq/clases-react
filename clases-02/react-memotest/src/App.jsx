import { useEffect, useState, useCallback } from "react";
import "./App.css";
import ContainerCartas from "./components/ContainerCartas/ContainerCartas";

function App() {
  const [cartas, setCartas] = useState([]);
  const [turnos, setTurnos] = useState(0);
  const [cartasVolteadas, setCartasVolteadas] = useState([]);
  const [cartasAcertadas, setCartasAcertadas] = useState([]);

  const obtenerEmojisAleatorios = () => {
    const emojis = ["🗼", "🗿", "🗽", "🌉", "🕌", "⛩️", "✈️", "🏞️"];
    return [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, i) => ({
        index: i,
        emoji,
        isFlipped: false,
      }));
  };

  const iniciarJuego = useCallback(() => {
    const emojisAleatorios = obtenerEmojisAleatorios();
    setCartas(emojisAleatorios);
    setCartasVolteadas([]);
    setCartasAcertadas([]);
    setTurnos(0);
  }, []);

  useEffect(() => {
    iniciarJuego();
  }, [iniciarJuego]);


  const handleClick = (index) => {
    if (
      cartasVolteadas.length === 2 ||
      cartasVolteadas.includes(index) ||
      cartasAcertadas.includes(index)
    ) {
      return;
    }

    const nuevasVolteadas = [...cartasVolteadas, index];
    setCartasVolteadas(nuevasVolteadas);

    if (nuevasVolteadas.length === 2) {
      setTurnos((prev) => prev + 1);

      const [primeraCarta, segundaCarta] = nuevasVolteadas;
      if (cartas[primeraCarta].emoji === cartas[segundaCarta].emoji) {
        setCartasAcertadas((prev) => [...prev, primeraCarta, segundaCarta]);
      }

      setTimeout(() => {
        setCartasVolteadas([]);
      }, 1000);
    }
  };

  const finDelJuego = cartas.length > 0 && cartasAcertadas.length === cartas.length;

  return (
    <ContainerCartas
      cartas={cartas}
      handleClick={handleClick}
      turnos={turnos}
      finDelJuego={finDelJuego}
      reiniciarJuego={iniciarJuego}
      cartasVolteadas={cartasVolteadas}
      cartasAcertadas={cartasAcertadas}
    />
  );
}

export default App;
