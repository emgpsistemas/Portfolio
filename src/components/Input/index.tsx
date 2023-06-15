import InputMask from "react-input-mask";
import ErrorMessage from "../ErrorMessage";
import { CustomInput } from "./interface";

export function Input({
  label,
  id,
  register,
  error,
  isMasked = false,
  mask,
  ...rest
}: CustomInput.InputProps) {
  return (
    <div className="flex w-full flex-col">
      <label className="mb-1 text-base font-bold leading-4 text-black">
        {label.toLocaleUpperCase()}
      </label>
      {isMasked ? (
        <InputMask
          mask={mask}
          className="m-0 h-14 rounded-lg border border-zinc-200 bg-white px-5 py-2 font-semibold transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-blue-600"
          id={id}
          name={id}
          autoFocus
          {...rest}
          {...register}
        />
      ) : (
        <input
          className="m-0 h-14 rounded-lg border border-zinc-200 bg-white px-5 py-2 font-semibold transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-blue-600"
          id={id}
          name={id}
          autoFocus
          {...rest}
          {...register}
        />
      )}
      {error?.message ? <ErrorMessage>{error?.message}</ErrorMessage> : null}
    </div>
  );
}
