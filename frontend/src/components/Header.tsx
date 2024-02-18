import { Link } from "react-router-dom";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { Sun, Moon, Menu, Plus, icons } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const routes = [
  {
    href: "/artists",
    label: "Artists",
  },
  {
    href: "/albums",
    label: "Albums",
  },
  {
    href: "/genres",
    label: "Genres",
  },
];

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        {" "}
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="fle flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link key={i} to={route.href}>
                      <p className="block px-2 py-1 text-lg">{route.label}</p>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link to="/">
              <div className="ml-4 lg:ml-0">
                <h1 className="text-xl font-bold">Song Mern</h1>
              </div>
            </Link>
          </div>
          <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Button key={i} asChild variant="ghost">
                <Link to={route.href}>
                  <p className="text-sm font-medium transition-colors">
                    {route.label}
                  </p>
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Link to="/songs/create">
              <Button
                variant={"ghost"}
                size={"icon"}
                aria-label="Add Song"
                className="mr-6"
              >
                <Plus className="h-6 w-6" />
              </Button>
            </Link>
            <Button
              variant={"ghost"}
              size={"icon"}
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
          </div>
        </div>{" "}
      </Container>
    </header>
  );
};

export default Header;
