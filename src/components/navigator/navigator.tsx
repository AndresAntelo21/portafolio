import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export const Navigator = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`font-montserrat sticky top-0 z-50 w-full py-4 text-2xl transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex w-[90%] max-w-screen-xl items-center justify-between lg:w-250">
        <div className="absolute right-0 block lg:hidden">
          <Drawer direction="right">
            <DrawerTrigger className="flex items-center">
              <RxHamburgerMenu />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>
                  <h1 className="font-montserrat text-left text-2xl font-bold">
                    Andres Portafolio
                  </h1>
                </DrawerTitle>
                <DrawerClose asChild>
                  <button className="absolute top-4 right-4">
                    <IoIosClose size={36} />
                  </button>
                </DrawerClose>
                <DrawerDescription>
                  <div className="font-montserrat flex flex-col gap-8 pt-4 text-left text-2xl text-white">
                    <DrawerClose asChild>
                      <Link to="/">Inicio</Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link to="/work-experience">Experiencia</Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link to="/projects">Proyectos</Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <a
                        href="https://drive.google.com/file/d/1z2iQB9ih5Lqjm-_SjNyOSb0fNIULJoBQ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CV
                      </a>
                    </DrawerClose>
                  </div>
                </DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="flex-grow text-left font-semibold lg:text-left">
          <Link to="/">
            <h1 className="inline-block">Andres Portafolio</h1>
          </Link>
        </div>

        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2 text-base">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="block rounded-md px-4 py-2 transition-colors hover:text-blue-400"
                  >
                    Inicio
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/work-experience"
                    className="block rounded-md px-4 py-2 transition-colors hover:text-blue-400"
                  >
                    Experiencia
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/projects"
                    className="block rounded-md px-4 py-2 transition-colors hover:text-blue-400"
                  >
                    Proyectos
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="https://drive.google.com/file/d/1z2iQB9ih5Lqjm-_SjNyOSb0fNIULJoBQ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-4 py-2 transition-colors hover:text-blue-400"
                  >
                    CV
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};
