"use client";

import { useEffect } from "react";

interface ToastProps {
  type: "success" | "error";
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  type,
  message,
  isVisible,
  onClose,
  duration = 5000,
}: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const bgGradient =
    type === "success"
      ? "bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600"
      : "bg-gradient-to-r from-red-500 via-rose-500 to-red-600";

  const icon = type === "success" ? "✅" : "⚠️";
  const borderColor =
    type === "success" ? "border-emerald-300" : "border-red-300";

  return (
    <div className="fixed top-6 md:right-6 md:left-auto left-1/2 transform -translate-x-1/2 md:transform-none z-[9999] animate-slide-in-right">
      <div
        className={`${bgGradient} ${borderColor} text-white px-6 py-4 rounded-xl shadow-2xl border backdrop-blur-sm flex items-center gap-4 min-w-[280px] max-w-[90vw] md:max-w-[420px] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl`}
        style={{
          boxShadow:
            type === "success"
              ? "0 20px 40px -12px rgba(16, 185, 129, 0.4), 0 8px 16px -8px rgba(16, 185, 129, 0.3)"
              : "0 20px 40px -12px rgba(239, 68, 68, 0.4), 0 8px 16px -8px rgba(239, 68, 68, 0.3)",
        }}
      >
        {/* Icon with subtle animation */}
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
            <span className="text-lg">{icon}</span>
          </div>
        </div>

        {/* Message content */}
        <div className="flex-1">
          <p className="font-semibold text-sm leading-relaxed tracking-wide">
            {message}
          </p>
        </div>

        {/* Close button with hover effect */}
        <button
          onClick={onClose}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 flex items-center justify-center group"
          aria-label="Close notification"
        >
          <span className="text-white text-sm font-bold leading-none group-hover:scale-110 transition-transform">
            ×
          </span>
        </button>

        {/* Progress bar overlay */}
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <div
            className="h-full bg-black/20 animate-toast-progress origin-left"
            style={{
              animation: `toast-progress ${duration}ms linear forwards`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
