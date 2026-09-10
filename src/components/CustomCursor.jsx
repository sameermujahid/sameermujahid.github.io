// MotionCursor.jsx
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";
import { useTheme } from "styled-components";

const MotionCursor = () => {
  const theme = useTheme();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 🔥 spring = smooth like motion.dev
  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  const [variant, setVariant] = useState("default");

  useEffect(() => {
    document.body.style.cursor = "none";

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (
        e.target.closest(
          "a, button, [data-cursor='hover'], [role='button']"
        )
      ) {
        setVariant("hover");
      } else if (e.target.closest("input, textarea")) {
        setVariant("text");
      } else {
        setVariant("default");
      }
    };

    const down = () => setVariant("click");
    const up = () => setVariant("default");

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  /* ================= VARIANTS ================= */

  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: theme.accent,
      mixBlendMode: "difference",
    },
    hover: {
      width: 60,
      height: 60,
      backgroundColor: theme.accentSubtle,
      border: `2px solid ${theme.accent}`,
    },
    text: {
      width: 6,
      height: 40,
      backgroundColor: theme.accent,
    },
    click: {
      width: 14,
      height: 14,
      backgroundColor: theme.accent,
    },
  };

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 999999,
      }}
      variants={variants}
      animate={variant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
      }}
    />
  );
};

export default MotionCursor;