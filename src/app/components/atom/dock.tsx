import React from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconAddressBook,
  IconLayoutDashboard,
  IconHome,
  IconSettingsStar,
  IconZoomExclamation,
  IconAlignBoxBottomCenter
} from "@tabler/icons-react";
import Image from "next/image";
import VsayLogo from "@/app/images/vsay-logo.png"

export function FloatingDockHome() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Services",
      icon: (
        <IconSettingsStar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/services",
    },

    {
      title: "Clients & Testimonials",
      icon: (
        <IconAlignBoxBottomCenter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/clients",
    },

    {
      title: "VSAY Home",
      icon: (
        <Image
          src={VsayLogo}
          width={60}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "/",
    },

    {
      title: "Ask Any Question ?",
      icon: (
        <IconZoomExclamation className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/questions"
    },

    {
      title: "Our Products",
      icon: (
        <IconLayoutDashboard className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/products",
    },
    {
      title: "About & Contact Us",
      icon: (
        <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contactus",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
