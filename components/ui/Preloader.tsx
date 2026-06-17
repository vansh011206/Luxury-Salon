"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [snipActive, setSnipActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem("glossy_loaded");
    if (hasLoadedBefore) {
      setLoading(false);
      setIsVisible(false);
      return;
    }

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    // Trigger snip at 900ms
    const snipTimer = setTimeout(() => {
      setSnipActive(true);
    }, 900);

    // Start exit at 1.4s
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("glossy_loaded", "true");
    }, 1400);

    // Fully unmount at 2.2s
    const visibleTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(snipTimer);
      clearTimeout(loadingTimer);
      clearTimeout(visibleTimer);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
      document.documentElement.classList.remove("loading-first-time");
      const tempStyle = document.getElementById("preloader-temp-style");
      if (tempStyle) {
        tempStyle.remove();
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
      document.documentElement.classList.remove("loading-first-time");
      const tempStyle = document.getElementById("preloader-temp-style");
      if (tempStyle) {
        tempStyle.remove();
      }
    };
  }, [loading]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {loading && (
        <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
          {/* LEFT CURTAIN */}
          <motion.div
            initial={{ x: 0 }}
            exit={{
              x: "-100%",
              transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
            }}
            className="absolute left-0 top-0 w-1/2 h-full pointer-events-auto"
            style={{ background: "linear-gradient(135deg, #1C1C1C 0%, #2a2a2a 100%)" }}
          />

          {/* RIGHT CURTAIN */}
          <motion.div
            initial={{ x: 0 }}
            exit={{
              x: "100%",
              transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
            }}
            className="absolute right-0 top-0 w-1/2 h-full pointer-events-auto"
            style={{ background: "linear-gradient(225deg, #1C1C1C 0%, #2a2a2a 100%)" }}
          />

          {/* CENTER SEAM LINE */}
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 z-10"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(200,169,126,0.3), transparent)" }}
          />

          {/* AMBIENT GLOW */}
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ background: "radial-gradient(circle at center, rgba(200,169,126,0.06) 0%, transparent 60%)" }}
          />

          {/* CENTRAL CONTENT */}
          <motion.div
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
            className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
          >
            <div className="relative flex flex-col items-center">
              {/* SCISSORS SVG */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-6"
              >
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  className="select-none"
                >
                  {/* Outer decorative ring */}
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="55"
                    stroke="rgba(200,169,126,0.15)"
                    strokeWidth="0.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />

                  {/* Inner decorative ring */}
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="rgba(200,169,126,0.25)"
                    strokeWidth="0.8"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
                  />

                  {/* LEFT BLADE GROUP */}
                  <motion.g
                    style={{ transformOrigin: "60px 62px" }}
                    animate={snipActive ? { rotate: 0 } : { rotate: -18 }}
                    transition={{ type: "spring", stiffness: 250, damping: 12 }}
                  >
                    {/* Left handle ring */}
                    <motion.ellipse
                      cx="42"
                      cy="84"
                      rx="8"
                      ry="9"
                      stroke="#C8A97E"
                      strokeWidth="1.8"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                    />
                    {/* Left handle to pivot */}
                    <motion.path
                      d="M 42 75 C 46 72, 54 68, 60 62"
                      stroke="#C8A97E"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                    />
                    {/* Right blade */}
                    <motion.path
                      d="M 60 62 Q 66 48, 70 30"
                      stroke="#C8A97E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.6 }}
                    />
                    {/* Right blade tip */}
                    <motion.path
                      d="M 70 30 L 68 28"
                      stroke="#C8A97E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, delay: 1.2 }}
                    />
                  </motion.g>

                  {/* RIGHT BLADE GROUP */}
                  <motion.g
                    style={{ transformOrigin: "60px 62px" }}
                    animate={snipActive ? { rotate: 0 } : { rotate: 18 }}
                    transition={{ type: "spring", stiffness: 250, damping: 12 }}
                  >
                    {/* Right handle ring */}
                    <motion.ellipse
                      cx="78"
                      cy="84"
                      rx="8"
                      ry="9"
                      stroke="#C8A97E"
                      strokeWidth="1.8"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                    />
                    {/* Right handle to pivot */}
                    <motion.path
                      d="M 78 75 C 74 72, 66 68, 60 62"
                      stroke="#C8A97E"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                    />
                    {/* Left blade */}
                    <motion.path
                      d="M 60 62 Q 54 48, 50 30"
                      stroke="#C8A97E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.6 }}
                    />
                    {/* Left blade tip */}
                    <motion.path
                      d="M 50 30 L 52 28"
                      stroke="#C8A97E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, delay: 1.2 }}
                    />
                  </motion.g>

                  {/* PIVOT SCREW */}
                  <motion.circle
                    cx="60"
                    cy="62"
                    r="2.5"
                    fill="#C8A97E"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  />
                  <motion.circle
                    cx="60"
                    cy="62"
                    r="1"
                    fill="#1C1C1C"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                  />

                  {/* HAIR STRANDS being cut (appear then get cut) */}
                  <motion.g
                    animate={snipActive ? { opacity: 0, y: 10 } : { opacity: 0.3, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <line x1="56" y1="24" x2="54" y2="38" stroke="#C8A97E" strokeWidth="0.5" opacity="0.4" />
                    <line x1="60" y1="22" x2="60" y2="38" stroke="#C8A97E" strokeWidth="0.5" opacity="0.5" />
                    <line x1="64" y1="24" x2="66" y2="38" stroke="#C8A97E" strokeWidth="0.5" opacity="0.4" />
                  </motion.g>
                </svg>
              </motion.div>

              {/* SALON NAME */}
              <motion.h1
                initial={{ opacity: 0, letterSpacing: "0.15em" }}
                animate={{ opacity: 1, letterSpacing: "0.35em" }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                className="font-playfair text-3xl sm:text-4xl font-bold tracking-[0.35em] uppercase leading-none pl-[0.35em]"
                style={{ color: "#C8A97E" }}
              >
                GLOSSY
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                className="font-outfit text-[9px] sm:text-[10px] tracking-[0.45em] uppercase mt-2 pl-[0.45em]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                THE ART OF HAIR
              </motion.p>

              {/* PROGRESS BAR */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 w-32 sm:w-40"
              >
                <div className="h-[1px] w-full rounded-full overflow-hidden" style={{ background: "rgba(200,169,126,0.15)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #C8A97E, #E2CBB0)",
                      width: `${progress}%`,
                    }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="block text-center mt-2 font-outfit text-[9px] tracking-[0.3em] uppercase"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {progress < 100 ? "Loading" : "Welcome"}
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* VERTICAL CUT LINE (appears when scissors snip) */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={snipActive ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute top-0 bottom-0 left-1/2 w-[1px] -translate-x-1/2 z-20 pointer-events-none"
          >
            <div
              className="w-full h-full"
              style={{ background: "linear-gradient(to bottom, rgba(200,169,126,0.05), rgba(200,169,126,0.6), rgba(200,169,126,0.05))" }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
