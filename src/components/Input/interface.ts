import { InputHTMLAttributes } from "react";

export namespace CustomInput {
  export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    register: any;
    error: any;
    isMasked?: boolean;
    mask?: string;
  }
}
