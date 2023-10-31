import "./game.css";

export default function Game() {
  return (
    <>
      <svg viewBox="0 0 100 100">
        {/* spoljasnji kvadrat */}
        <line className="board-line" x1={10} y1={10} x2={90} y2={10} />
        <line className="board-line" x1={90} y1={10} x2={90} y2={90} />
        <line className="board-line" x1={90} y1={90} x2={10} y2={90} />
        <line className="board-line" x1={10} y1={90} x2={10} y2={10} />
        <circle cx={10} cy={10} r={1} />
        <circle cx={50} cy={10} r={1} />
        <circle cx={90} cy={10} r={1} />
        <circle cx={90} cy={50} r={1} />
        <circle cx={90} cy={90} r={1} />
        <circle cx={50} cy={90} r={1} />
        <circle cx={10} cy={90} r={1} />
        <circle cx={10} cy={50} r={1} />
      </svg>
    </>
  );
}
