"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import HelpPop from "./HelpPop";

interface InputProps {
  label: string;
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
  color?: string;
  type?: "text" | "password" | "email" | "date" | "number";
  required?: boolean;
  helperText?: string;
  children?: React.ReactNode;
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
  children,
}: InputProps) {
  const [internalValue, setInternalValue] = useState(value ?? "");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const displayValue = value !== undefined ? value : internalValue;
  const isActive = displayValue.length > 0 || type === "date";
  const hasPrefix = Boolean(children);
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="relative w-full pt-4 select-none!">
      <input
        type={inputType}
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
          peer w-full px-3 py-2 border shadow-md-10
          hover:shadow-lg hover:scale-105 active:scale-100
          focus:outline-none focus:border-2 transition rounded-xl
          ${hasPrefix ? "pl-10" : ""}
          ${disabled ? "opacity-50 bg-gray-600 cursor-not-allowed border-gray-300!" : ""}`}
        style={{ color: "#000", borderColor: color }}
        required={requeired}
      />
      {hasPrefix && (
        <div className="pointer-events-none absolute left-3 top-6 flex items-center opacity-50">
          <span className="w-4 flex items-center justify-center">
            {children}
          </span>
        </div>
      )}
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-7 text-gray-500 hover:text-gray-700 transition-colors"
          tabIndex={-1}
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      )}
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
          pointer-events-none absolute left-3 px-1 text-gray-500 flex gap-2
          transition-all
          ${isActive ? "-top-1 text-sm" : "top-6 text-base"}
          peer-focus:-top-1 peer-focus:text-sm
          ${hasPrefix ? "pl-6" : ""}
          ${disabled ? "text-gray-200! font-bold" : ""}
        `}
        style={{ color }}
      >
        {label}
      </label>
    </div>
  );
}
