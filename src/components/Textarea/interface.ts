import { TextareaHTMLAttributes } from "react";

export namespace CustomTextArea {
  export interface TextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    id: string;
    value: string;
  }
}
