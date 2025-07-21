import { useState } from "react";

const HeaderMenus = ({ navLinks, currentPath }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const normalizePath = (path) => path?.replace(/^\/|\/$/g, '');

    return (
        <nav>
            {/* Desktop Nav */}
            <div className="max-w-7xl mx-auto px-2 hidden lg:flex justify-between items-center h-16">
                <div className="flex gap-4">
                    {navLinks.map((link) => {
                        const isActive =
                            normalizePath(currentPath) === normalizePath(link.url) ||
                            link.children.some(
                                (sub) => normalizePath(currentPath) === normalizePath(sub.url)
                            );

                        return (
                            <div key={link.id} className="relative group">
                                <div className="px-2 py-2 flex items-center">
                                    <a
                                        href={link.url}
                                        className={`text-[13px] font-[600] whitespace-nowrap ${isActive
                                            ? "bg-[linear-gradient(#2d89bf)] text-white px-2 py-1 rounded-2xl"
                                            : "text-gray-700 hover:text-[#2d89bf]"
                                            }`}
                                    >
                                        {link.label.toUpperCase()}
                                    </a>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`inline ml-1 ${isActive
                                            ? "text-[#2d89bf]"
                                            : "text-gray-700 hover:text-[#2d89bf]"
                                            }`}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="m7 10l5 5l5-5"
                                        />
                                    </svg>
                                </div>

                                <div className="absolute z-10 left-0 hidden group-hover:block bg-white border rounded shadow-lg w-[180px]">
                                    {link.children.map((sub, subIdx) => {
                                        const isSubActive =
                                            normalizePath(currentPath) === normalizePath(sub.url);
                                        return (
                                            <div key={sub.id || subIdx}>
                                                <a
                                                    href={sub.url}
                                                    className={`block px-4 p-4 text-[12px] font-[600] ${isSubActive
                                                        ? "text-[#2d89bf]"
                                                        : "text-gray-700 hover:text-[#2d89bf]"
                                                        }`}
                                                >
                                                    {sub.label.toUpperCase()}
                                                </a>
                                                <hr />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}

                    <div className="hidden md:block md:pr-2">
                        <a
                            href="/build-my-growth-engine"
                            className="bg-[#2d89bf] hover:bg-[#f5a31c] text-white rounded-full px-4 p-4 text-[15px] block font-[500] text-center transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-[0_0_20px_#f5a31c]"
                        >
                            Build My Growth Engine
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="lg:hidden p-4 z-50 relative">
                <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="border p-2 text-black"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Drawer Overlay + Drawer */}
            {menuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/40 z-30 transition-opacity duration-300"
                        onClick={() => setMenuOpen(false)}
                    ></div>

                    <div
                        className={`fixed top-0 left-0 w-64 md:w-96 h-full bg-white z-40 p-6 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <button
                        aria-label="Open menu"
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-4 right-4"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="black"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>

                        <ul className="mt-12 space-y-4">
                            {navLinks.map((item, index) => {
                                const isActive =
                                    normalizePath(currentPath) === normalizePath(item.url) ||
                                    item.children?.some(
                                        (sub) =>
                                            normalizePath(currentPath) === normalizePath(sub.url)
                                    );

                                return (
                                    <li key={item.id}>
                                        <button
                                        aria-label="active menu"
                                            onClick={() =>
                                                setActiveMenu(activeMenu === index ? null : index)
                                            }
                                            className={`w-full text-left flex justify-between items-center text-[13px] font-[600] px-3 py-2 rounded-md transition-colors duration-200 ${isActive
                                                 ? "bg-[linear-gradient(#2d89bf)] text-white px-2 py-1 rounded-2xl"
                                            : "text-gray-700 hover:text-[#2d89bf]"
                                                }`}
                                        >
                                            {item.label.toUpperCase()}
                                            <svg
                                                className={`w-4 h-4 transform transition-transform duration-200 ${activeMenu === index
                                                    ? "text-[#2d89bf]"
                                                    : ""
                                                    }`}
                                                fill="none"
                                                stroke="black"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                ></path>
                                            </svg>
                                        </button>

                                        {/* Animated Submenu */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMenu === index
                                                ? "max-h-96 opacity-100 mt-2"
                                                : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <ul className="pl-6 space-y-2 text-sm text-gray-700 shadow py-2">
                                                {item.children.map((sub) => {
                                                    const isSubActive =
                                                        normalizePath(currentPath) ===
                                                        normalizePath(sub.url);
                                                    return (
                                                        <li key={sub.id} className="">
                                                            <a
                                                                href={sub.url}
                                                                className={`block transition-colors duration-200 ${isSubActive
                                                                    ? "text-[#2d89bf] bg-[#a6cfe78e] p-0.5 rounded-2xl"
                                                        : "text-gray-700 hover:text-[#2d89bf] p-0.5"
                                                                    }`}
                                                            >
                                                                {sub.label}
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </>
            )}
        </nav>
    );
};

export default HeaderMenus;
