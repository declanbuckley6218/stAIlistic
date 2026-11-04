import { ButtonHTMLAttributes } from "react";

interface QuickButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}
export default function QuickButton({ children, className = '', ...props }:QuickButtonProps) {
  return (
    <button 
      className={`hover:scale-102 px-5 rounder-2xl border border-stailistictext-gray bg-stailistic-blue-faint h-fit w-fit m-2 rounded-lg transition-colors ${className}`}
      {...props}
    >
      <p className="text-stailistic-blue-muted font-bold flex justify-center">
        {children}
      </p>
    </button>
  );
}

export function QuickButtonGroup({children}: any){
    return(
        <div className="flex h-fit px-2 justify-between">
            {children}
        </div>
    );
}