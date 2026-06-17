"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-outfit tracking-widest uppercase transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed rounded-full font-semibold cursor-pointer text-center";
  
  const variants = {
    primary: "bg-sage text-primary border border-sage hover:bg-sage-dark hover:border-sage-dark py-3 md:py-3.5 px-6 md:px-8 text-xs md:text-sm",
    secondary: "border border-sage text-sage hover:bg-sage hover:text-primary py-3 md:py-3.5 px-6 md:px-8 text-xs md:text-sm",
    ghost: "text-cream hover:text-sage relative py-2 px-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-sage after:transition-all after:duration-300 hover:after:w-full tracking-widest text-xs",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div
        className="inline-block"
        whileHover={variant !== "ghost" ? { scale: 1.03 } : {}}
        whileTap={variant !== "ghost" ? { scale: 0.98 } : {}}
      >
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={variant !== "ghost" && !disabled ? { scale: 1.03 } : {}}
      whileTap={variant !== "ghost" && !disabled ? { scale: 0.98 } : {}}
      className={combinedClassName}
    >
      {children}
    </motion.button>
  );
}
