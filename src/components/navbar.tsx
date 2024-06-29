import { Clock, Github, MenuIcon, Timer, Twitter } from "lucide-react";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavbarLink: {
  link: string;
  label: string | ReactNode;
  target?: HTMLAttributeAnchorTarget;
}[] = [
  { link: "/", label: "Home" },
  { link: "/about", label: "about" },
  { link: "/jotai", label: "Jotai" },
];

export const Navbar = () => (
  <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-8 lg:px-24 justify-between">
    <NavigationMenu className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <NavigationMenuList>
        {NavbarLink.map(({ link, label, target }) => (
          <NavigationMenuItem key={link}>
            <Link href={link} legacyBehavior passHref target={target}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          {NavbarLink.map(({ link, label, target }) => (
            <Link
              key={link}
              href={link}
              legacyBehavior
              passHref
              target={target}
            >
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>

    <nav className="flex space-x-3 items-center">
      <Button variant="outline" size="icon" asChild>
        <Link href="https://twitter.com/wangrunlin_" target="_blank">
          <Twitter className="h-4 w-4" />
        </Link>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <Link
          href="https://github.com/wangrunlin/next-shadcn-ui-ts"
          target="_blank"
        >
          <Github className="h-4 w-4" />
        </Link>
      </Button>
      <ModeToggle />
    </nav>
  </header>
);
