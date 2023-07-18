import React from "react";
import { BiChevronDown, BiChevronRight, BiMenu, BiSearch } from "react-icons/bi";
import{SiBookmyshow} from"react-icons/si";
const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                    {/* span->for putting next to each other */}
                    <span className="text-gray-400 text-xs flex items-center">
                        New Delhi
                        <BiChevronRight />
                    </span>
                </div>
                <button className="bg-red-600 text-white text-l rounded -mr-12 px-1 py-1 hover:animate-pulse"><a href="https://play.google.com/store/apps/details?id=com.bt.bms&hl=en_IN&gl=US" target="_blank">Use App</a></button>

                <div className="w-7 h-7">
                    <BiSearch className="w-full h-full" />
                </div>
            </div>
        </>
    );
};
const NavMd = () => {
    return (
        <div className="w-full flex items-center px-2 py-2 bg-white gap-3 rounded-sm">
            <BiSearch />
            <input type="search" className="w-full focus:outline-none"placeholder="Search for Movies, Events, Plays, Sports and Activities" />
        </div>
    );
};
const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2 gap-12">
                    <a href="http://localhost:3000/">
                    <div className="w-46 h-16">
        <img src="https://asset.brandfetch.io/id4J58sqa_/idaQ1GyW_d.svg?updated=1674733846500" alt="LOGO" className="w-full h-full"/>
                    </div>
                    </a>
                    <div className="w-full flex items-center px-2 py-2 bg-white gap-3 rounded-sm">
                        <BiSearch />
                        <input
                            type="search"
                            className="w-full focus:outline-none "
                            placeholder="Search for Movies, Events, Plays, Sports and Activities"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3 ">
                <span className="text-gray-400 text-xs flex items-center font-semibold
                 hover:text-white hover:cursor-pointer">
                    Delhi-NCR<BiChevronDown />
                    </span>
                    <button className="bg-red-600 text-white text-sm rounded px-2 py-1">Sign in</button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full hover:cursor-pointer"/>
                </div>
                </div>
            </div>
        </>
    );
};

function Navbar() {
    return (
        <>
            <nav className="bg-navCol-800 px-4 py-2">
                <div className="md:hidden">{<NavSm />}</div>
                <div className="hidden lg:hidden md:flex">{<NavMd />}</div>
                <div className="hidden lg:flex">{<NavLg />}</div>
            </nav>
        </>
    );
}

export default Navbar;
