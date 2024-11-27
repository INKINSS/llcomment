import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {label: "inicio", href: "/"},
    {label: "colabora", href: "/collaborate"},
    {label: "descubre", href: "/discover"},
    {label: "repositorio", href: "https://github.com/INKINSS/llcomment", target: "_blank"},
    {label: "contacto", href: "/contact"},
  ];

  return (
    <Navbar
      className="w-full"
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="flex justify-between">
        <NavbarBrand>
          <p className="font-bold text-inhert text-primary text-[1.5rem]">
            llco
          </p>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-[1.1rem] tracking-widest" href="/">
            inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[1.1rem] tracking-widest"
            color="foreground"
            href="/collaborate"
            aria-current="page"
          >
            colabora
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[1.1rem] tracking-widest"
            color="foreground"
            href="/discover"
          >
            descubre
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[1.1rem] tracking-widest"
            color="foreground"
            href="https://github.com/INKINSS/llcomment"
            target="_blank"
          >
            repositorio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[1.1rem] tracking-widest"
            color="foreground"
            href="/contact"
          >
            contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full tracking-widest"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
