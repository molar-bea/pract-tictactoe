import React from "react";

import type { SquareProps } from "../types/square";


export default function Square({ value }: SquareProps) {
  return (
    <button className="square">
      {value}
    </button>
  );
}
