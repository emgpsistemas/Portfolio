import { InputHTMLAttributes } from "react";

export namespace CustomInput {
  export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    value: string;
  }
}
