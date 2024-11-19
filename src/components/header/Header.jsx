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
    "inicio",
    "colabora",
    "descubre",
    "repositorio",
    "contacto",
  ];

  return (
    <Navbar className="w-full" shouldHideOnScroll  onMenuOpenChange={setIsMenuOpen}>
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
          <Link className="text-[1.1rem] tracking-widest" href="#">
            inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[1.1rem] tracking-widest"
            color="foreground"
            href="#"
            aria-current="page"
          >
            colabora
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[1.1rem] tracking-widest"
            color="foreground"
            href="#"
          >
            descubre
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[1.1rem] tracking-widest"
            color="foreground"
            href="#"
          >
            repositorio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[1.1rem] tracking-widest"
            color="foreground"
            href="#"
          >
            contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full tracking-widest"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
