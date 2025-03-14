import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export const Navigator = () => {
  return (
    <nav className="font-poppins sticky top-0 z-50 w-full bg-black py-4 text-2xl">
      <div className="relative mx-auto flex w-[90%] max-w-screen-xl items-center justify-between lg:w-250">
        <div className="absolute left-0 block lg:hidden">
          <Sheet>
            <SheetTrigger className="flex items-center">
              <RxHamburgerMenu />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <h1 className="font-poppins text-left text-2xl font-bold">
                    Andres Portafolio
                  </h1>
                </SheetTitle>
                <SheetDescription>
                  <div className="font-poppins flex flex-col gap-8 pt-4 text-left text-2xl text-white">
                    <SheetClose asChild>
                      <Link to="/">Home</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/work-experience">Work Experience</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/projects">Projects</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <a
                        href="https://drive.google.com/file/d/185dgOBLNU1kapKmNW3OEcANvZMnRmch5/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resume
                      </a>
                    </SheetClose>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-grow text-center lg:text-left">
          <Link to="/">
            <h1>Andres Portfolio</h1>
          </Link>
        </div>

        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2 text-base">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="block rounded-md px-4 py-2 transition-colors hover:bg-violet-900"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/work-experience"
                    className="block rounded-md px-4 py-2 transition-colors hover:bg-violet-900"
                  >
                    Work Experience
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/projects"
                    className="block rounded-md px-4 py-2 transition-colors hover:bg-violet-900"
                  >
                    Projects
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="https://drive.google.com/file/d/185dgOBLNU1kapKmNW3OEcANvZMnRmch5/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-4 py-2 transition-colors hover:bg-violet-900"
                  >
                    Resume
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
