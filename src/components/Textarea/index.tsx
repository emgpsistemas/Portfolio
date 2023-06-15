import ErrorMessage from "../ErrorMessage";
import { CustomTextArea } from "./interface";

export function Textarea({
  label,
  id,
  register,
  error,
  ...rest
}: CustomTextArea.TextAreaProps) {
  return (
    <div className="flex w-full flex-col">
      <label className="mb-1 text-base font-bold leading-4 text-black">
        {label.toLocaleUpperCase()}
      </label>
      <textarea
        className="m-0 h-28 rounded-lg border border-zinc-200 bg-white px-5 py-2 font-semibold transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-blue-600"
        id={id}
        {...rest}
        {...register}
      />
      {error?.message ? <ErrorMessage>{error?.message}</ErrorMessage> : null}
    </div>
  );
}
