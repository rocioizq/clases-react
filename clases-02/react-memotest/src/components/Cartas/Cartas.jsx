export default function Cartas({ emoji, isFlipped, handleClick }) {
  return (
    <div className={`carta ${isFlipped ? "flip" : ""}`} onClick={handleClick}>
      <div className="front-card"></div>
      <div className="back-card">{emoji}</div>
    </div>
  );
}
