//TEXTO DE AYUDA PARA BOTONES Y OTROS ELEMENTOS

interface HelpPopProps {
  text: string;
}

export default function HelpPop({ text }: HelpPopProps) {
  return (
    <div className="absolute -top-2 -right-2 z-20 group/tooltip">
      <div className="w-5 h-5 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs font-bold cursor-help select-none">
        ?
      </div>
      <span className="absolute bottom-full right-0 mb-2 text-xs text-gray-400 opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none bg-white px-2 py-1 rounded shadow-md select-none">
        {text}
      </span>
    </div>
  );
}
