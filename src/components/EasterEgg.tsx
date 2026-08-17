import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const TARGET = "bgiii";

const EasterEgg = ({ onTrigger }: { onTrigger: () => void }) => {
  const bufferRef = useRef("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = document.activeElement;
      const isTyping =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (isTyping) return;

      if (e.key.length !== 1 || !/[a-z]/i.test(e.key)) {
        bufferRef.current = "";
        return;
      }

      bufferRef.current = (bufferRef.current + e.key.toLowerCase()).slice(-TARGET.length);

      if (bufferRef.current === TARGET) {
        bufferRef.current = "";
        const colors = ["#3b82f6", "#facc15", "#f8fafc"];
        confetti({ particleCount: 100, spread: 80, startVelocity: 45, origin: { y: 0.3 }, colors });
        onTrigger();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onTrigger]);

  return null;
};

export default EasterEgg;
