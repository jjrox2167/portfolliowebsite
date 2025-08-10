'use client';

import { useEffect, useRef } from 'react';

export function useCanvas(draw: (ctx: CanvasRenderingContext2D) => void) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;

    const render = () => {
      // keep the canvas pixels in sync with its CSS size
      const { offsetWidth, offsetHeight } = canvas;
      if (canvas.width !== offsetWidth || canvas.height !== offsetHeight) {
        canvas.width = offsetWidth;
        canvas.height = offsetHeight;
      }

      draw(ctx);
      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, [draw]);

  return canvasRef;
}
