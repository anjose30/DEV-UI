"use client";

import { useEffect, useState } from "react";

interface InputProps {
  label: string;
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
  color?: string;
  type?: "text" | "password" | "email";
}

export default function Input({
  label,
  onChange,
  value,
  disabled = false,
  color,
  type = "text",
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
        className="
          peer w-full px-3 py-2 border-b-2
          focus:outline-none focus:border-2 transition focus:rounded-xl
        "
        style={{ color: "#000", borderColor: color }}
      />

      <label
        className={`
          pointer-events-none absolute left-3 px-1 text-gray-500
          transition-all
          ${isActive ? "-top-1 text-sm" : "top-6 text-base"}
          peer-focus:-top-1 peer-focus:text-sm
        `}
        style={{ color }}
      >
        {label}
      </label>
    </div>
  );
}
