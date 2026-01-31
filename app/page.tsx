"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Home() {
  return (
    <div className="h-svh w-full flex gap-2 p-2">
      <div className="flex flex-col gap-4 p-2">
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
      <div className="flex flex-col gap-2 p-2">
        < Input label="Nombre" color="var(--color-base-custom)" type="text"/>
        < Input label="Correo" color="var(--color-base-custom)" type="email"/>
        < Input label="Contraseña" color="var(--color-base-custom)" type="password"/>
        < Input label="Obligatorio" color="var(--color-base-custom)" type="text" required/>
        < Input label="Con ayuda" color="var(--color-base-custom)" type="text" helperText="Ingresa tu nombre completo"/>
        < Input label="Desactivado" color="var(--color-base-custom)" type="text" disabled/>
      </div>
    </div>
  );  
}
