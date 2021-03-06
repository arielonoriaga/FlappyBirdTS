export interface CanvasElement extends HTMLElement {
  width: number;
  height: number;
  getContext: (dimensions: string) => CanvasContext | any;
}

export interface CanvasContext {
  fillStyle: string;
  fillRect: (x: number, y: number, width: number, height: number) => void
}

export interface Cords {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface DrawRectangle {
  ctx: CanvasContext;
  color: string;
  cords: Cords;
}

// @ts-ignore
import { Position } from "@types/Bird";

interface Canvas {
  container: CanvasElement;
  ctx: CanvasContext;
  drawRectangle: (color: string, cords: Cords) => void;
  height: number;
  init: () => void;
  refresh: (birdPosition: Position) => void;
  width: number;
}

export default Canvas;