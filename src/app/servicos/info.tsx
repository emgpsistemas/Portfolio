import { Servico } from "@/interfaces/Service";
import {
  AppStoreLogo,
  Binoculars,
  Command,
  FigmaLogo,
  Gauge,
  GoogleChromeLogo,
  TestTube,
  Wrench,
} from "phosphor-react";

export const servicos: Servico[] = [
  {
    id: 1,
    title: "Desenvolvimento de aplicativos",
    description:
      "Criação de aplicativos móveis completos, desde a concepção inicial até a implementação e lançamento nas lojas de aplicativos. Isso envolve o desenvolvimento tanto da parte frontend quanto da parte backend do aplicativo.",
    icon: {
      component: <AppStoreLogo size={72} color="#444DF8" weight="bold" />,
      position: "left",
    },
  },
  {
    id: 2,
    title: "Desenvolvimento de sites completos",
    description:
      "Elaboração de sites completos, desde a concepção e o design até a implementação e o lançamento.",
    icon: {
      component: <GoogleChromeLogo size={72} color="#444DF8" weight="bold" />,
      position: "right",
    },
  },
  {
    id: 3,
    title: "Design de interface do usuário (UI) e experiência do usuário (UX)",
    description:
      "O processo de design de interface do usuário (UI) e experiência do usuário (UX) em um projeto envolve a compreensão das necessidades e expectativas dos usuários por meio de pesquisas e análises. Em seguida, são criados wireframes e protótipos para visualizar a estrutura e funcionalidade da interface. Posteriormente, ocorre o design visual, onde são definidos os elementos gráficos e o estilo da interface, garantindo a usabilidade e satisfação do usuário por meio de testes e iterações.",
    icon: {
      component: <FigmaLogo size={72} color="#444DF8" weight="bold" />,
      position: "left",
    },
  },
  {
    id: 4,
    title: "Desenvolvimento de APIs",
    description:
      "Se o aplicativo móvel precisa se comunicar com um servidor ou outros serviços externos, podemos criar APIs (interfaces de programação de aplicativos) para facilitar essa integração.",
    icon: {
      component: <Command size={72} color="#444DF8" weight="bold" />,
      position: "right",
    },
  },
  {
    id: 5,
    title: "Manutenção e atualizações",
    description:
      "Após o lançamento do aplicativo ou do seu sistema web, é necessário realizar manutenção contínua, corrigir bugs e adicionar novos recursos. Cuidamos dessas atualizações para garantir que a aplicação esteja funcionando corretamente.",
    icon: {
      component: <Wrench size={72} color="#444DF8" weight="bold" />,
      position: "left",
    },
  },
  {
    id: 6,
    title: "Otimização de desempenho",
    description:
      "Otimizamos o desempenho do aplicativo, identificando gargalos de desempenho e implementando melhorias para tornar o aplicativo mais rápido e eficiente.",
    icon: {
      component: <Gauge size={72} color="#444DF8" weight="bold" />,
      position: "right",
    },
  },
  {
    id: 7,
    title: "Testes e depuração",
    description:
      "É essencial realizar testes rigorosos em um aplicativo móvel para garantir que ele funcione corretamente em diferentes dispositivos e cenários. Realizamos testes de unidade, testes de integração e depuração de problemas para garantir a qualidade do aplicativo.",
    icon: {
      component: <TestTube size={72} color="#444DF8" weight="bold" />,
      position: "left",
    },
  },
  {
    id: 8,
    title: "Consultoria e aconselhamento",
    description:
      "Além do desenvolvimento do aplicativo, fornecemos consultorias e aconselhamentos sobre tecnologias, melhores práticas de desenvolvimento e estratégias para o sucesso do aplicativo.",
    icon: {
      component: <Binoculars size={72} color="#444DF8" weight="bold" />,
      position: "right",
    },
  },
  {
    id: 9,
    title: "Otimização de SEO para mecanismos de buscas",
    description:
      "Otimizamos o SEO (Search Engine Optimization) de websites implementando estratégias e técnicas para melhorar a visibilidade e o posicionamento de um site nos resultados de busca. Isso inclui otimização de palavras-chave, melhoria da estrutura do site visando aumentar o tráfego orgânico e a eficácia da presença online do negócio.",
    icon: {
      component: <Command size={72} color="#444DF8" weight="bold" />,
      position: "left",
    },
  },
];
