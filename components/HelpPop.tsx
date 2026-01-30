//TEXTO DE AYUDA PARA BOTONES Y OTROS ELEMENTOS

interface HelpPopProps {
  text: string;
}

export default function HelpPop({ text }: HelpPopProps) {
  return (
    <div className="absolute top-0 right-0 z-20 group
      translate-x-1/4 -translate-y-1/4">
      
      <div className="w-4 h-4 bg-gray-400 text-white rounded-full
        flex items-center justify-center text-[10px] font-bold
        cursor-help select-none">
        ?
      </div>

      <span className="absolute bottom-full right-0 mb-2
        text-xs text-gray-400 opacity-0 group-hover:opacity-100
        transition-opacity whitespace-nowrap pointer-events-none
        bg-white px-2 py-1 rounded shadow-md select-none">
        {text}
      </span>
    </div>
  );
}


