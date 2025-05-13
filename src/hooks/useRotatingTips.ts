"use client";

import { useEffect, useState } from "react";

export function useRotatingTips(tips: string[], intervalMs = 5000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tips.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [tips, intervalMs]);

  return tips[index];
}
