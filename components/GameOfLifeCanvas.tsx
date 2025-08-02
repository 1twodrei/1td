'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';

const GameOfLifeCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [grid, setGrid] = useState<number[][]>([]);
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);
    const resolution = 10; // Size of each cell
    const fadeDuration = 1600; // milliseconds
    const cells = useRef(new Map<string, { state: number; alpha: number; animationStartTime: number }>()).current;
    const gameTickInterval = 1700; // Very slow tick speed (milliseconds)
    const lastTickTime = useRef(0);

    const create2DArray = useCallback((c: number, r: number): number[][] => {
        let arr: number[][] = new Array(c);
        for (let i = 0; i < c; i++) {
            arr[i] = new Array(r).fill(0);
        }
        return arr;
    }, []);

    const setup = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const newCols = Math.floor(canvas.width / resolution);
        const newRows = Math.floor(canvas.height / resolution);

        setCols(newCols);
        setRows(newRows);

        const initialGrid = create2DArray(newCols, newRows);
        cells.clear(); // Clear previous cells on resize
        for (let i = 0; i < newCols; i++) {
            for (let j = 0; j < newRows; j++) {
                initialGrid[i][j] = Math.floor(Math.random() * 2); // Randomly initialize cells
                if (initialGrid[i][j] === 1) {
                    cells.set(`${i},${j}`, { state: 1, alpha: 1, animationStartTime: 0 });
                }
            }
        }
        setGrid(initialGrid);
    }, [create2DArray, cells]);

    const countNeighbors = useCallback((currentGrid: number[][], x: number, y: number): number => {
        let sum = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                let col = (x + i + cols) % cols;
                let row = (y + j + rows) % rows;
                sum += currentGrid[col][row];
            }
        }
        sum -= currentGrid[x][y];
        return sum;
    }, [cols, rows]);

    const updateGame = useCallback(() => {
        setGrid(prevGrid => {
            const nextGrid = create2DArray(cols, rows);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    let state = prevGrid[i][j];
                    let neighbors = countNeighbors(prevGrid, i, j);

                    const cellKey = `${i},${j}`;
                    let cell = cells.get(cellKey) || { state: 0, alpha: 0, animationStartTime: 0 };

                    if (state === 0 && neighbors === 3) {
                        nextGrid[i][j] = 1; // Birth
                        if (cell.state === 0) { // Only if it was dead before
                            cell.state = 1;
                            cell.alpha = 0; // Start transparent
                            cell.animationStartTime = performance.now();
                        }
                    } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                        nextGrid[i][j] = 0; // Death
                        if (cell.state === 1) { // Only if it was alive before
                            cell.state = 0;
                            cell.alpha = 1; // Start opaque
                            cell.animationStartTime = performance.now();
                        }
                    } else {
                        nextGrid[i][j] = state; // Stays the same
                    }
                    cells.set(cellKey, cell);
                }
            }
            return nextGrid;
        });
    }, [cols, rows, create2DArray, countNeighbors, cells]);

    const draw = useCallback((currentTime: DOMHighResTimeStamp) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update game state only after the interval
        if (currentTime - lastTickTime.current > gameTickInterval) {
            updateGame();
            lastTickTime.current = currentTime;
        }

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const cellKey = `${i},${j}`;
                const cell = cells.get(cellKey);

                if (!cell) continue;

                let currentAlpha = cell.alpha;

                if (cell.animationStartTime > 0) {
                    const elapsedTime = currentTime - cell.animationStartTime;
                    const progress = Math.min(elapsedTime / fadeDuration, 1);

                    if (cell.state === 1) { // Fading in (newly born)
                        currentAlpha = progress; // 0 to 1
                    } else { // Fading out (dying)
                        currentAlpha = 1 - progress; // 1 to 0
                    }

                    if (progress >= 1) {
                        cell.animationStartTime = 0; // Animation finished
                        cell.alpha = cell.state === 1 ? 1 : 0; // Set final alpha
                        if (cell.state === 0) {
                            cells.delete(cellKey); // Remove dead cells after fading out
                        }
                    }
                } else {
                    // If no active animation, use the stored alpha (1 for alive, 0 for dead)
                    currentAlpha = cell.alpha;
                }

                if (currentAlpha > 0) {
                    ctx.beginPath();
                    ctx.arc(i * resolution + resolution / 2, j * resolution + resolution / 2, resolution / 2 - 1, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 0, 0, ${currentAlpha})`;
                    ctx.fill();
                }
            }
        }
        requestAnimationFrame(draw);
    }, [cols, rows, updateGame, cells]);

    useEffect(() => {
        setup();
        window.addEventListener('resize', setup);
        return () => {
            window.removeEventListener('resize', setup);
        };
    }, [setup]);

    useEffect(() => {
        if (grid.length > 0) { // Only start drawing once grid is initialized
            requestAnimationFrame(draw);
        }
    }, [grid, draw]);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default GameOfLifeCanvas;
