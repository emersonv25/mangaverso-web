import { MenuIcon, MoonIcon, SunIcon } from "lucide-react";
import { NavItem } from "./Components/NavItem";
import { ThemeButton } from "./Components/ThemeButton";


const Header: React.FC = () => {
    return (
        <nav className="bg-zinc-900">
            <div className=" flex flex-wrap max-w-screen-xl mx-auto p-4 items-center justify-between">
                <a href="https://flowbite.com/" className="flex items-center">
                    <span className="text-2xl font-semibold text-white dark:text-white">MangaVerso</span>
                </a>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 md:space-x-8 md:mt-0">
                        <NavItem title="Inicio" />
                        <NavItem title="Favoritos" />
                        <NavItem title="Populares" />
                        <NavItem title="Lançamentos" />
                        <NavItem title="Sobre" />
                    </ul>
                </div>
                <div className="flex space-x-2">
                    <ThemeButton />
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center bg-zinc-800 text-white rounded-lg md:hidden hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <MenuIcon />
                    </button>
                </div>
            </div>
        </nav>
    )
};


export default Header;