"use client";

export default function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-sage/20 to-transparent w-full max-w-xs" />
      <span className="text-sage text-xs">◆</span>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-sage/20 to-transparent w-full max-w-xs" />
    </div>
  );
}
