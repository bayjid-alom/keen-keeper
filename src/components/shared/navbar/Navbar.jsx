import { useState } from 'react';
import { Link } from 'react-router';
import { FiMenu, FiX, FiHome, FiClock, FiBarChart2 } from 'react-icons/fi';
import MyNavlink from './MyNavlink';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">

            <nav className="relative mx-auto flex min-h-[68px] w-[94%] items-center justify-between md:w-[92%] lg:w-[88%]">


                <Link to="/" className="text-[19px] md:text-2xl font-extrabold tracking-tight">
                    <span className="text-[#1F2937]">Keen</span>
                    <span className="text-[#244D3F]">Keeper</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-1 md:flex">
                    <li>
                        <MyNavlink to="/">
                            <FiHome size={14} /> Home
                        </MyNavlink>
                    </li>
                    <li>
                        <MyNavlink to="/timeline">
                            <FiClock size={14} /> Timeline
                        </MyNavlink>
                    </li>
                    <li>
                        <MyNavlink to="/stats">
                            <FiBarChart2 size={14} /> Stats
                        </MyNavlink>
                    </li>
                </ul>


                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
                >
                    {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>



                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <ul className="absolute left-0 top-full flex w-full flex-col gap-2 rounded-b-lg border-t border-gray-200 bg-white p-4 shadow-lg md:hidden">

                        <li>
                            <MyNavlink to="/" onClick={() => setIsMenuOpen(false)}>
                                <FiHome size={14} /> Home
                            </MyNavlink>
                        </li>

                        <li>
                            <MyNavlink to="/timeline" onClick={() => setIsMenuOpen(false)}>
                                <FiClock size={14} /> Timeline
                            </MyNavlink>
                        </li>

                        <li>
                            <MyNavlink to="/stats" onClick={() => setIsMenuOpen(false)}>
                                <FiBarChart2 size={14} /> Stats
                            </MyNavlink>
                        </li>

                    </ul>
                )}

            </nav>
        </header>
    );
};

export default Navbar;
