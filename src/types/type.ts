export type SquareValue = "X" | "O" | null;

export type Squares = SquareValue[];

export interface SquareProps {
  value: SquareValue;
  onSquareClick: () => void;
}

  
export interface BoardProps {
  xIsNext: boolean;
  squares: Squares;
  onPlay: (nextSquares: Squares) => void;
}
