import clsx from "clsx";
import { usePathname } from "next/navigation";
import {
  ChatText,
  // Code,
  House,
  ListBullets,
  Users,
} from "phosphor-react";

export const useLinks = () => {
  const pathname = usePathname();

  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <House
          size={28}
          color={clsx("", {
            "#FFFFFF": pathname === "/",
            "#191938": pathname !== "/",
          })}
          weight="bold"
        />
      ),
    },
    {
      label: "Serviços",
      href: "/servicos",
      icon: (
        <ListBullets
          size={28}
          color={clsx("", {
            "#FFFFFF": pathname === "/servicos",
            "#191938": pathname !== "/servicos",
          })}
          weight="bold"
        />
      ),
    },
    // {
    //   label: "Portfolio",
    //   href: "/portfolio",
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
      href: "/sobre",
      icon: (
        <Users
          size={28}
          color={clsx("", {
            "#FFFFFF": pathname === "/sobre",
            "#191938": pathname !== "/sobre",
          })}
          weight="bold"
        />
      ),
    },

    {
      label: "Contato",
      href: "/contato",
      icon: (
        <ChatText
          size={28}
          color={clsx("", {
            "#FFFFFF": pathname === "/contato",
            "#191938": pathname !== "/contato",
          })}
          weight="bold"
        />
      ),
    },
  ];

  return links;
};
