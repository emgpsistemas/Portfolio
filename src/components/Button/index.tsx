import { CustomButton } from "./interface";

export function Button({ children, ...rest }: CustomButton.ButtonProps) {
  return (
    <button
      className="h-14 w-full rounded-lg bg-dark-blue-500 text-white transition-all hover:bg-dark-blue-400 disabled:opacity-80 disabled:hover:cursor-not-allowed"
      {...rest}
    >
      <span className="flex items-center justify-center px-3 py-1 text-center text-base font-bold leading-5">
        {children}
      </span>
    </button>
  );
}
