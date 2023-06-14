import { CustomInput } from "./interface";

export function Input({ label, id, value, ...rest }: CustomInput.InputProps) {
  return (
    <div className="flex w-full flex-col">
      <label className="mb-1 text-base font-bold leading-4 text-black">
        {label.toLocaleUpperCase()}
      </label>

      <input
        className="m-0 h-14 rounded-lg bg-zinc-100 px-5 py-2 font-semibold transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-blue-600"
        id={id}
        value={value}
        autoFocus
        {...rest}
      />
    </div>
  );
}
