import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const WIDTH = 360;
const HEIGHT = 520;
const GRAVITY = 0.45;
const FLAP_VELOCITY = -7.5;
const PLAYER_RADIUS = 14;
const PILLAR_WIDTH = 54;
const GAP_HEIGHT = 150;
const PILLAR_SPACING = 230;
const SCROLL_SPEED = 2.6;
const HIGH_SCORE_KEY = "iii-game-highscore";

interface Pillar {
  x: number;
  gapTop: number;
  gapBottom: number;
  passed: boolean;
}

type GameState = "ready" | "playing" | "gameover";

const Game = ({ open, onClose, theme }: { open: boolean; onClose: () => void; theme: "light" | "dark" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>("ready");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const playerYRef = useRef(HEIGHT / 2);
  const playerVYRef = useRef(0);
  const pillarsRef = useRef<Pillar[]>([]);
  const frameRef = useRef(0);
  const scoreRef = useRef(0);
  const gameStateRef = useRef<GameState>("ready");
  const pausedRef = useRef(false);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const stored = Number(localStorage.getItem(HIGH_SCORE_KEY) || 0);
    setHighScore(stored);
  }, []);

  const resetGame = () => {
    playerYRef.current = HEIGHT / 2;
    playerVYRef.current = 0;
    pillarsRef.current = [
      { x: WIDTH + 100, gapTop: 150, gapBottom: 150 + GAP_HEIGHT, passed: false },
    ];
    frameRef.current = 0;
    scoreRef.current = 0;
    setScore(0);
    gameStateRef.current = "playing";
    setGameState("playing");
  };

  const flap = () => {
    if (gameStateRef.current === "ready" || gameStateRef.current === "gameover") {
      resetGame();
      return;
    }
    playerVYRef.current = FLAP_VELOCITY;
  };

  const endGame = () => {
    gameStateRef.current = "gameover";
    setGameState("gameover");
    if (scoreRef.current > highScore) {
      setHighScore(scoreRef.current);
      localStorage.setItem(HIGH_SCORE_KEY, String(scoreRef.current));
    }
  };

  useEffect(() => {
    if (!open) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = WIDTH * dpr;
    canvas.height = HEIGHT * dpr;
    canvas.style.width = `${WIDTH}px`;
    canvas.style.height = `${HEIGHT}px`;
    ctx.scale(dpr, dpr);

    const isDark = theme === "dark";
    const bgColor = isDark ? "#020617" : "#f8fafc";
    const traceColor = isDark ? "rgba(148, 163, 184, 0.08)" : "rgba(100, 116, 139, 0.12)";
    const pillarColor = "#3b82f6";
    const playerColor = "#fbbf24";

    const draw = () => {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      ctx.strokeStyle = traceColor;
      ctx.lineWidth = 1;
      for (let i = 0; i < 6; i++) {
        const y = (i + 1) * (HEIGHT / 7);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(WIDTH, y);
        ctx.stroke();
      }

      pillarsRef.current.forEach((pillar) => {
        [
          { top: 0, bottom: pillar.gapTop },
          { top: pillar.gapBottom, bottom: HEIGHT },
        ].forEach(({ top, bottom }) => {
          const barWidth = (PILLAR_WIDTH - 8) / 3;
          for (let b = 0; b < 3; b++) {
            const bx = pillar.x + b * (barWidth + 4);
            ctx.fillStyle = pillarColor;
            ctx.shadowColor = "rgba(59, 130, 246, 0.5)";
            ctx.shadowBlur = 8;
            const radius = 4;
            const h = bottom - top;
            if (h > 0) {
              ctx.beginPath();
              ctx.roundRect(bx, top, barWidth, h, radius);
              ctx.fill();
            }
          }
        });
      });
      ctx.shadowBlur = 0;

      const playerX = 70;
      const playerY = playerYRef.current;
      const tilt = Math.max(-0.5, Math.min(0.9, playerVYRef.current / 12));

      ctx.save();
      ctx.translate(playerX, playerY);
      ctx.rotate(tilt);
      ctx.beginPath();
      ctx.arc(0, 0, PLAYER_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = playerColor;
      ctx.shadowColor = "rgba(251, 191, 36, 0.6)";
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = isDark ? "#1e293b" : "#78350f";
      ctx.font = "bold 9px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("III", 0, 1);
      ctx.restore();
    };

    const step = () => {
      if (!pausedRef.current && gameStateRef.current === "playing") {
        frameRef.current += 1;
        playerVYRef.current += GRAVITY;
        playerYRef.current += playerVYRef.current;

        pillarsRef.current.forEach((p) => (p.x -= SCROLL_SPEED));

        const last = pillarsRef.current[pillarsRef.current.length - 1];
        if (last && last.x < WIDTH - PILLAR_SPACING) {
          const margin = 60;
          const gapTop = margin + Math.random() * (HEIGHT - GAP_HEIGHT - margin * 2);
          pillarsRef.current.push({
            x: last.x + PILLAR_SPACING,
            gapTop,
            gapBottom: gapTop + GAP_HEIGHT,
            passed: false,
          });
        }

        pillarsRef.current = pillarsRef.current.filter((p) => p.x > -PILLAR_WIDTH);

        const playerX = 70;
        const playerY = playerYRef.current;

        if (playerY - PLAYER_RADIUS < 0 || playerY + PLAYER_RADIUS > HEIGHT) {
          endGame();
        }

        pillarsRef.current.forEach((p) => {
          const hitsX = playerX + PLAYER_RADIUS > p.x && playerX - PLAYER_RADIUS < p.x + PILLAR_WIDTH;
          if (hitsX) {
            const hitsGap = playerY - PLAYER_RADIUS > p.gapTop && playerY + PLAYER_RADIUS < p.gapBottom;
            if (!hitsGap) endGame();
          }
          if (!p.passed && p.x + PILLAR_WIDTH < playerX) {
            p.passed = true;
            scoreRef.current += 1;
            setScore(scoreRef.current);
          }
        });
      }

      draw();
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    const handleVisibility = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animationRef.current);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [open, theme, highScore]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "ArrowUp") {
        e.preventDefault();
        flap();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      gameStateRef.current = "ready";
      setGameState("ready");
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-[100] p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-4 animate-modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-mono uppercase tracking-widest text-blue-500">
            III Runner
          </h3>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-red-400 transition-colors"
            aria-label="Close game"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative rounded-lg overflow-hidden" style={{ width: WIDTH, height: HEIGHT }}>
          <canvas
            ref={canvasRef}
            onPointerDown={flap}
            className="cursor-pointer touch-none"
          />

          <div className="absolute top-3 left-0 right-0 flex justify-center pointer-events-none">
            <span className="text-3xl font-bold text-slate-900 dark:text-white drop-shadow">
              {score}
            </span>
          </div>

          {gameState === "ready" && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/30 text-center px-6"
              onClick={flap}
            >
              <p className="text-white font-semibold text-lg">Fly through the III gates</p>
              <p className="text-slate-200 text-sm">Tap, click, or press Space to flap</p>
              <p className="text-slate-300 text-xs mt-4">High Score: {highScore}</p>
            </div>
          )}

          {gameState === "gameover" && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 text-center px-6"
              onClick={flap}
            >
              <p className="text-white font-bold text-xl">Game Over</p>
              <p className="text-slate-200 text-sm">Score: {score}</p>
              <p className="text-slate-300 text-xs">High Score: {highScore}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  resetGame();
                }}
                className="mt-3 text-sm font-medium text-slate-900 bg-blue-400 hover:bg-blue-300 px-4 py-2 rounded-lg transition-colors"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
