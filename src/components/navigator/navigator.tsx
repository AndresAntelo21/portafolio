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
  return (
    <nav className="font-montserrat sticky top-0 z-50 w-full bg-transparent py-6 text-2xl lg:bg-transparent">
      <div className="relative mx-auto flex w-[90%] max-w-screen-xl items-center justify-between lg:justify-center lg:w-250">
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
                    <IoIosClose size={24} />
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

        <div className="text-left">
          <Link to="/">
            <h1 className="inline-block font-montserrat uppercase font-semibold text-xl lg:hidden">Andres Portfolio</h1>
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
