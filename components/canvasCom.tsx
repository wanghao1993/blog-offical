"use client";
import { renderCanvas } from "@/components/canvas";
import { useEffect } from "react";
export default function CanvasCom() {
  useEffect(() => {
    renderCanvas();
  }, []);
  return (
    <canvas
      className="bg-skin-base pointer-events-none absolute inset-0"
      id="canvas"
    ></canvas>
  );
}
