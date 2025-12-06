"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface FooterGradientProps {
  isVisible: boolean;
}

const FooterGradient = ({ isVisible }: FooterGradientProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-none fixed inset-x-0 bottom-0 h-[40vh] -z-20 bg-gradient-to-t from-[#ff7a1a] via-[#2c1c16] to-transparent"
        />
      )}
    </AnimatePresence>
  );
};

export default FooterGradient;
