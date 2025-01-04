"use client"

import React, {useEffect, useRef} from "react";

const useInkCursor = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D>(null);
    const pointerRef = useRef<{ x: number | null, y: number | null }>({
        x: null,
        y: null,
    });
    const trailRef = useRef<{ x: number, y: number, dx: number, dy: number }[]>([]);
    const paramsRef = useRef({
        pointsNumber: 40,
        widthFactor: 0.3,
        mouseThreshold: 0.6,
        spring: 0.4,
        friction: 0.5,
    });

    useEffect(() => {
        pointerRef.current = {
            x: 0.5 * window.innerWidth,
            y: 0.5 * window.innerHeight,
        };
        if (!canvasRef.current) return
        const canvas = canvasRef.current;
        const ctx = canvas!.getContext("2d")!;
        ctxRef.current = ctx;

        // Initialize trail array
        trailRef.current = new Array(paramsRef.current.pointsNumber).fill(null).map(() => ({
            x: pointerRef.current.x!,
            y: pointerRef.current.y!,
            dx: 0,
            dy: 0,
        }));

        // eslint-disable-next-line
        const updateMousePosition = (x: any, y: any) => {
            pointerRef.current.x = x;
            pointerRef.current.y = y;
        };

        // eslint-disable-next-line
        const handleMouseMove = (e: any) => {
            updateMousePosition(e.clientX, e.clientY);
        };

        // eslint-disable-next-line
        const handleTouchMove = (e: any) => {
            updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
        };

        const setupCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const update = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const primary = window.getComputedStyle(document.documentElement).getPropertyValue("--primary")

            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, primary);

            ctx.strokeStyle = gradient;

            trailRef.current.forEach((p, pIdx) => {
                const prev = pIdx === 0 ? pointerRef.current : trailRef.current[pIdx - 1];
                const spring = pIdx === 0 ? 0.4 * paramsRef.current.spring : paramsRef.current.spring;
                p.dx += (prev.x! - p.x) * spring;
                p.dy += (prev.y! - p.y) * spring;
                p.dx *= paramsRef.current.friction;
                p.dy *= paramsRef.current.friction;
                p.x += p.dx;
                p.y += p.dy;
            });

            ctx.beginPath();
            ctx.moveTo(trailRef.current[0].x, trailRef.current[0].y);

            for (let i = 1; i < trailRef.current.length - 1; i++) {
                const xc = 0.5 * (trailRef.current[i].x + trailRef.current[i + 1].x);
                const yc = 0.5 * (trailRef.current[i].y + trailRef.current[i + 1].y);

                ctx.quadraticCurveTo(trailRef.current[i].x, trailRef.current[i].y, xc, yc);
                ctx.lineWidth = paramsRef.current.widthFactor * (paramsRef.current.pointsNumber - i);
                ctx.stroke();
            }
            ctx.lineTo(trailRef.current[trailRef.current.length - 1].x, trailRef.current[trailRef.current.length - 1].y);
            ctx.stroke();

            window.requestAnimationFrame(update);
        };

        setupCanvas();
        update();

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("resize", setupCanvas);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("resize", setupCanvas);
        };

    }, [canvasRef]);

    return (
        <canvas
            ref={canvasRef}
            className="h-screen w-screen opacity-60"
        />
    );
};

export default useInkCursor;

