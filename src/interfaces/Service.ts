interface Icon {
  component: JSX.Element;
  position: "left" | "right";
}

export interface Servico {
  id: number;
  title: string;
  description: string;
  icon: Icon;
}
