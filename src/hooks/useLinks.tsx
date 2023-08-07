import { usePathname } from "next/navigation";
import {
  ChatText,
  DeviceMobile,
  GoogleChromeLogo,
  // Code,
  House,
  ListBullets,
  ListNumbers,
  Sparkle,
  Users,
} from "phosphor-react";

export const useLinks = () => {
  const pathname = usePathname();

  const links = [
    {
      label: "Home",
      href: "home",
      icon: <House size={28} color={"#191938"} weight="bold" />,
    },
    {
      label: "Serviços",
      href: "servicos",
      icon: <ListBullets size={28} color={"#191938"} weight="bold" />,
    },
    {
      label: "Diferenciais",
      href: "diferenciais",
      icon: <Sparkle size={28} color={"#191938"} weight="bold" />,
    },
    {
      label: "Como trabalhamos",
      href: "como-trabalhamos",
      icon: <ListNumbers size={28} color={"#191938"} weight="bold" />,
    },
    {
      label: "Projetos Web",
      href: "web",
      icon: <GoogleChromeLogo size={28} color={"#191938"} weight="bold" />,
    },
    {
      label: "Projetos Mobile",
      href: "mobile",
      icon: <DeviceMobile size={28} color={"#191938"} weight="bold" />,
    },
    // {
    //   label: "Portfolio",
    //   href: "portfolio",
    //   icon: (
    //     <Code
    //       size={28}
    //       color={clsx("", {
    //         "#FFFFFF": pathname === "/portfolio",
    //         "#191938": pathname !== "/portfolio",
    //       })}
    //       weight="bold"
    //     />
    //   ),
    // },
    {
      label: "Sobre",
      href: "sobre",
      icon: <Users size={28} color={"#191938"} weight="bold" />,
    },
    {
      label: "Contato",
      href: "contato",
      icon: <ChatText size={28} color={"#191938"} weight="bold" />,
    },
  ];

  return links;
};
