"use client";

import { Fragment, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.svg";

import { Popover, Transition } from "@headlessui/react";
import { ChatText, House, List, ListBullets, Users, X } from "phosphor-react";

function Header() {
  const [isIconHovering, setIsIconHovering] = useState(false);
  const windowWidth = window.innerWidth;

  const links = [
    {
      label: "Home",
      href: "/",
      icon: <House size={28} color="#ffffff" weight="bold" />,
    },
    {
      label: "Serviços",
      href: "/servicos",
      icon: <ListBullets size={28} color="#ffffff" weight="bold" />,
    },
    {
      label: "Sobre",
      href: "/sobre",
      icon: <Users size={28} color="#ffffff" weight="bold" />,
    },
    // {
    //   label: "Portfolio",
    //   href: "/portfolio",
    //   icon: <Code size={28} color="#ffffff" weight="bold" />,
    // },
    {
      label: "Contato",
      href: "/contato",
      icon: <ChatText size={28} color="#ffffff" weight="bold" />,
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
              className="focus:ring-offset-background focus:dark-blue-600 flex items-center rounded-xl px-2 py-2 transition-all hover:bg-dark-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
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
                    className="focus:ring-offset-background focus:dark-blue-600 flex items-center rounded-xl px-2 py-2 transition-all hover:bg-dark-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
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
              <nav className="mr-4 mt-6 flex flex-col items-end gap-y-8">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="flex flex-row items-center gap-4 text-lg font-semibold"
                  >
                    <span className="text-white">
                      {link.label.toUpperCase()}
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
