"use client";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="h-svh w-full flex gap-2 p-2">
      <div className="flex flex-col gap-4">
        <Button label="Primary" color="var(--color-base-custom)" />
        <Button
          label="Secondary"
          variant="secondary"
          color="var(--color-base-custom)"
        />
        <Button
          label="Outline"
          variant="outline"
          color="var(--color-base-custom)"
        />
        <Button label="Mini" variant="mini" color="var(--color-base-custom)" />
        <Button
          label="Desactivado"
          color="var(--color-base-custom)"
          variant="primary"
          disabled
        />
        <Button
          label="Con ayuda"
          color="var(--color-base-custom)"
          variant="primary"
          helperText="Hola, yo hago esto"
        />
        <Button
          variant="text"
          color="var(--color-base-custom)"
          label="Botón de texto"
        />
      </div>
    </div>
  );
}
