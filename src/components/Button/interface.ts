import { ButtonHTMLAttributes, ReactNode } from "react";

export namespace CustomButton {
  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string | ReactNode;
  }
}
