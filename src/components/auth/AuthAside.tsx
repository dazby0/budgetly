"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  tip: string;
  footer?: string;
}

export default function AuthAside({ tip, footer }: Props) {
  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark text-white flex flex-col justify-center items-center p-10 relative overflow-hidden">
      <Image
        src="/budgetly-logo.png"
        alt="Budgetly logo"
        width={400}
        height={100}
      />
      <div className="h-24 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={tip}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-xl max-w-md text-center"
          >
            {tip}
          </motion.p>
        </AnimatePresence>
      </div>
      {footer && (
        <div className="absolute bottom-4 text-sm text-white/60">{footer}</div>
      )}
    </div>
  );
}
