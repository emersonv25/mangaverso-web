export const NavItem = ({ title }: { title: string }) => (
    <li>
        <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent hover:transition"
            aria-current="page"
        >
            {title}
        </a>
    </li>
);
