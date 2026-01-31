"use client";

import { useEffect, useState } from "react";
import HelpPop from "./HelpPop";

interface InputProps {
  label: string;
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
  color?: string;
  type?: "text" | "password" | "email";
  required?: boolean;
  helperText?: string;
}

export default function Input({
  label,
  onChange,
  value,
  disabled = false,
  color,
  type = "text",
  required: requeired = false,
  helperText,
}: InputProps) {
  const [internalValue, setInternalValue] = useState(value ?? "");

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const displayValue = value !== undefined ? value : internalValue;
  const isActive = displayValue.length > 0;

  return (
    <div className="relative w-full pt-4">
      <input
        type={type}
        disabled={disabled}
        value={displayValue}
        onChange={(e) => {
          const nextValue = e.target.value;
          if (value === undefined) {
            setInternalValue(nextValue);
          }
          onChange?.(nextValue);
        }}
        className={`          
          peer w-full px-3 py-2 border shadow-md
          hover:shadow-lg hover:scale-105 active:scale-100
          focus:outline-none focus:border-2 transition rounded-xl
          ${disabled ? "opacity-50 bg-gray-600 cursor-not-allowed border-gray-300!" : ""}`}
        style={{ color: "#000", borderColor: color }}
        required={requeired}
      />
      <div className="absolute top-4 right-0">
        {helperText && <HelpPop text={helperText} />}
      </div>
      {requeired && (
        <p
          className={`absolute top-7 right-3 text-2xl text-red-600 transition-opacity peer-focus:opacity-0 ${
            isActive ? "opacity-0" : "opacity-100"
          }`}
        >
          *
        </p>
      )}

      <label
        className={`
          pointer-events-none absolute left-3 px-1 text-gray-500
          transition-all
          ${isActive ? "-top-1 text-sm" : "top-6 text-base"}
          peer-focus:-top-1 peer-focus:text-sm
          ${disabled ? "text-gray-200! font-bold" : ""}
        `}
        style={{ color }}
      >
        {label}
      </label>
    </div>
  );
}
