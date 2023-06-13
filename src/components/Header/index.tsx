"use client";

import { Fragment, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.svg";

import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ChatText, House, List, ListBullets, Users, X } from "phosphor-react";

function Header() {
  const windowWidth = window.innerWidth;
  const [isIconHovering, setIsIconHovering] = useState(false);
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
    // {
    //   label: "Portfolio",
    //   href: "/portfolio",
    //   icon: <Code size={28} color={clsx("", {
    //   "#FFFFFF": pathname === "/portfolio",
    //   "#191938": pathname !== "/portfolio",
    // })} weight="bold" />,
    // },
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

  return (
    <Popover className="relative bg-transparent">
      <div className="mx-auto w-screen px-10">
        <div className="flex items-center justify-between py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={windowWidth >= 768 ? 80 : 44}
                height={windowWidth >= 768 ? 80 : 44}
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button
              className="focus:ring-offset-background focus:primary-blue-500 flex items-center rounded-xl px-2 py-2 transition-all hover:bg-primary-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
              onMouseEnter={() => setIsIconHovering(true)}
              onMouseLeave={() => setIsIconHovering(false)}
            >
              <List
                size={32}
                color={isIconHovering ? "#FFFFFF" : "#191938"}
                weight="bold"
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            {links.map((link) =>
              link.label === "Home" ? null : (
                <Link
                  href={link.href}
                  key={link.href}
                  className="text-lg font-semibold"
                >
                  {link.label.toUpperCase()}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-300 ease-out"
        enterFrom="opacity-0 scale-90"
        enterTo="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-90"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform rounded-b-xl bg-black bg-opacity-30 p-0 backdrop-blur-md transition md:hidden"
        >
          <div className="bg-background divide-y-2 divide-gray-50 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-7 py-8">
              <div className="flex items-center justify-end">
                <div className="">
                  <Popover.Button
                    className="focus:ring-offset-background focus:primary-blue-500 flex items-center rounded-xl px-2 py-2 transition-all hover:bg-primary-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    onMouseEnter={() => setIsIconHovering(true)}
                    onMouseLeave={() => setIsIconHovering(false)}
                  >
                    <X
                      size={32}
                      color={"#FFFFFF"}
                      weight="bold"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
              <nav className="mt-6 flex flex-col items-end gap-y-3">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className={clsx(
                      "flex min-w-[180px] flex-row items-center justify-end gap-4 rounded-xl px-6 py-4 transition-all ",
                      {
                        "bg-primary-blue-500 hover:bg-primary-blue-600":
                          pathname === link.href,
                      },
                      {
                        "bg-white hover:bg-slate-200": pathname !== link.href,
                      }
                    )}
                  >
                    <span
                      className={clsx(
                        "text-lg font-semibold text-black",
                        {
                          "text-white": pathname === link.href,
                        },
                        {
                          "text-black": pathname !== link.href,
                        }
                      )}
                    >
                      {link.label}
                    </span>
                    {link.icon}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Header;
