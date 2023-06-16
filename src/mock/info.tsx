import eduardoMuchak from "@/assets/team/eduardo-muchak.png";
import gabrielPeralta from "@/assets/team/gabriel-peralta.png";
import { Diferencial } from "@/interfaces/Differential";
import { HowWeWork } from "@/interfaces/HowWeWork";
import { Servico } from "@/interfaces/Service";
import { TeamMember } from "@/interfaces/TeamMember";
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

export const diferenciais: Diferencial[] = [
  {
    id: 1,
    title: "Transparência",
    description:
      "Priorizamos a atuação sempre orientada pela ética, respeito e transparência com nossos clientes e parceiros.",
  },
  {
    id: 2,
    title: "Metodologias Ágeis",
    description:
      "Utilizamos metodologias como Scrum ou Kanban, pela capacidade de podermos fornecer entregas rápidas e iterativas, adaptando-se às necessidades em constante mudança do cliente.",
  },
  {
    id: 3,
    title: "Experiência do Cliente",
    description:
      "Nos concentramos em oferecer um atendimento personalizado, comunicação transparente, prazos de entrega confiáveis ​​e suporte pós-implementação eficiente.",
  },
  {
    id: 4,
    title: "Qualidade e Garantia",
    description:
      "Possuímos processos e práticas rigorosas de controle de qualidade que diferencia a entrega dos projetos com alta qualidade. Isso pode incluir testes automatizados, revisões de código, práticas de desenvolvimento seguro, entre outros.",
  },
  {
    id: 5,
    title: "Abordagem Consultiva",
    description:
      "Ao invés de simplesmente fornecer serviços de desenvolvimento, fornecemos uma abordagem consultiva. Isso significa que trabalhamos em estreita colaboração com o cliente, entendendo seus objetivos de negócios e fornecendo orientações estratégicas sobre como a tecnologia pode ser aplicada para alcançar esses objetivos.",
  },
  {
    id: 6,
    title: "Flexibilidade e Personalização",
    description:
      "Fornecemos soluções altamente personalizadas e flexíveis, adaptadas às necessidades específicas de cada cliente.",
  },
];

export const comoTrabalhamos: HowWeWork[] = [
  {
    id: 1,
    title: "Definição do Escopo",
    description:
      "Nesta etapa, é importante estabelecer claramente os objetivos, requisitos e limites do projeto. Isso inclui identificar o problema a ser resolvido, as metas a serem alcançadas e os recursos disponíveis. Esta etapa ocorre através de uma reunião inicial, sem qualquer custo.",
  },
  {
    id: 2,
    title: "Análise e Levantamento de Requisitos",
    description:
      "Nesta etapa, é importante entender completamente as necessidades dos stakeholders e usuários envolvidos no projeto. Isso envolve a coleta de informações, a realização de entrevistas, a análise de documentos e a identificação de requisitos funcionais e não funcionais.",
  },
  {
    id: 3,
    title: "Planejamento",
    description:
      "O planejamento é fundamental para mapear todas as atividades necessárias para alcançar os objetivos do projeto. Ele envolve a definição de tarefas, cronograma, recursos necessários, alocação de equipe e estimativa de custos. Nesta etapa será encaminhado um orçamento com o descritivo das tarefas a serem realizadas, bem como um cronograma inicial de desenvolvimento.",
  },
  {
    id: 4,
    title: "Design",
    description:
      "Com base nos requisitos levantados, é feito o design do projeto. Isso pode incluir o design da arquitetura do sistema, o design da interface do usuário, a definição do fluxo de informações e a criação de protótipos.",
  },
  {
    id: 5,
    title: "Desenvolvimento",
    description:
      "Esta etapa envolve a implementação real do projeto. Os desenvolvedores trabalham na construção do software, na criação de componentes, na codificação de funcionalidades e na integração de sistemas, conforme definido no design.",
  },
  {
    id: 6,
    title: "Testes",
    description:
      "Após o desenvolvimento, são realizados testes para garantir que o projeto atenda aos requisitos e funcione corretamente. Isso pode envolver testes de unidade, testes de integração e testes end-to-end.",
  },
  {
    id: 7,
    title: "Implantação",
    description:
      "Após a conclusão dos testes e a aprovação do projeto, ele é implantado em ambiente de produção. Isso pode incluir a configuração de servidores, a migração de dados, a instalação de software e a realização de testes finais antes do lançamento oficial.",
  },
  {
    id: 8,
    title: "Monitoramento e Controle",
    description:
      "Uma vez que o projeto esteja em execução, é importante monitorar seu desempenho e controlar seu progresso. Isso envolve o acompanhamento de indicadores-chave, a resolução de problemas, a realização de ajustes e a garantia de que o projeto esteja alinhado com o planejamento inicial.",
  },
  {
    id: 9,
    title: "Encerramento",
    description:
      "Finalmente, o projeto é encerrado formalmente. Isso inclui a documentação final, a avaliação dos resultados alcançados, a entrega do projeto aos stakeholders e a realização de lições aprendidas para futuros projetos.",
  },
];

export const equipe: TeamMember[] = [
  {
    id: 1,
    nome: "Eduardo Muchak",
    descricao:
      "Sou um desenvolvedor apaixonado por aprendizado e sempre busco maneiras de me aprimorar e crescer na minha carreira. Acredito que o conhecimento e a sabedoria são os principais fatores para melhorar nossas vidas e, por isso, tenho uma grande paixão pelo mundo da tecnologia.",
    imagem: eduardoMuchak,
    linkedIn: "https://www.linkedin.com/in/eduardomuchak",
    github: "https://github.com/eduardomuchak",
  },
  {
    id: 2,
    nome: "Gabriel Peralta",
    descricao:
      "Sou um desenvolvedor web full stack e advogado apaixonado por tecnologia. Com uma formação em Direito e uma sólida experiência como desenvolvedor, tenho a capacidade de combinar o conhecimento jurídico com habilidades técnicas avançadas para criar soluções inovadoras no campo digital. Meu entusiasmo por tecnologia me impulsiona a estar sempre atualizado com as últimas tendências e ferramentas, garantindo que eu possa fornecer soluções eficientes e eficazes para os desafios que enfrento. Com um olhar atento para as necessidades dos clientes, meu objetivo é criar produtos e serviços que otimizem processos e atendam às demandas do mundo moderno.",
    imagem: gabrielPeralta,
    linkedIn: "https://www.linkedin.com/in/gabriel-pperalta",
    github: "https://github.com/G-PPeralta",
  },
];
