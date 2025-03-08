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
    <nav className="bg-secondary font-poppins sticky top-0 z-10 flex w-full items-center gap-12 px-7 py-4 text-2xl lg:justify-between">
      <div className="block lg:hidden">
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
      <div className="text-xl lg:px-12">
        <Link to="/">
          <h1>Andres Portafolio</h1>
        </Link>
      </div>
      {/* navigation-menu */}
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList className="space-x-2 px-12 text-base">
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
    </nav>
  );
};
