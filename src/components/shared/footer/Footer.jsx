import { Link } from 'react-router';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (

        <footer className="mt-13 bg-[#285B49] py-10 text-white md:mt-16 lg:mt-20">
            <div className="mx-auto w-[92%]  py-6 md:w-[85%] lg:w-[70%]">

                {/* Footer Content */}
                <div className="text-center">

                    <Link to="/" className="text-2xl font-bold md:text-3xl lg:text-4xl">
                        KeenKeeper
                    </Link>

                    <p className="mx-auto mt-3 text-xs leading-relaxed text-white/70">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>



                    {/* Social Links */}
                    <div className="mt-5">
                        <h3 className="text-sm font-medium">Social Links</h3>

                        <div className="mt-3 flex items-center justify-center gap-3">

                            <a href="https://instagram.com" target="_blank" rel="noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#285B49] transition-colors hover:bg-gray-200">
                                <FiInstagram size={16} />
                            </a>

                            <a href="https://facebook.com" target="_blank" rel="noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#285B49] transition-colors hover:bg-gray-200">
                                <FiFacebook size={16} />
                            </a>

                            <a href="https://x.com" target="_blank" rel="noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#285B49] transition-colors hover:bg-gray-200">
                                <FiTwitter size={16} />
                            </a>

                        </div>
                    </div>

                </div>

                {/* Copyright & Links */}
                <div className="mx-auto w-[95%] mt-7 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row">

                    <p>
                        © 2026 KeenKeeper. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <Link to="/privacy-policy" className="transition-colors hover:text-white">
                            Privacy Policy
                        </Link>

                        <Link to="/terms" className="transition-colors hover:text-white">
                            Terms of Service
                        </Link>

                        <Link to="/cookies" className="transition-colors hover:text-white">
                            Cookies
                        </Link>
                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
