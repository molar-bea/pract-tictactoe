import type { SquareProps } from "./../types/type";

export default function Square({ value, onSquareClick }: SquareProps): JSX.Element {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
