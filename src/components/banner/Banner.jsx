
import React from 'react';
import { Link } from 'react-router';
import { FiPlus } from 'react-icons/fi';

const Banner = () => {
    return (
        <section className="my-10 md:my-15 lg:my-20 mx-auto w-[92%] md:w-[85%] lg:w-[70%]">


            <div className="rounded-lg px-4  md:px-8  text-center">
                <h1 className="text-2xl md:text-3xl lg:text-[37px] font-bold text-[#1F2937]">
                    Friends to keep close in your life
                </h1>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#64748B]">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>



                {/* Add Friend Button */}
                <Link
                    to="/add-friend"
                    className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[#285B49] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1E4739]"
                >
                    <FiPlus size={16} />
                    Add a Friend
                </Link>




                {/* Statistics Cards */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-lg border border-gray-100 bg-white px-3 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <h2 className="text-2xl font-bold text-[#285B49]">10</h2>
                        <p className="mt-1 text-sm text-[#64748B]">Total Friends</p>
                    </div>

                    <div className="rounded-lg border border-gray-100 bg-white px-3 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <h2 className="text-2xl font-bold text-[#285B49]">3</h2>
                        <p className="mt-1 text-sm text-[#64748B]">On Track</p>
                    </div>

                    <div className="rounded-lg border border-gray-100 bg-white px-3 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <h2 className="text-2xl font-bold text-[#285B49]">6</h2>
                        <p className="mt-1 text-sm text-[#64748B]">Need Attention</p>
                    </div>

                    <div className="rounded-lg border border-gray-100 bg-white px-3 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <h2 className="text-2xl font-bold text-[#285B49]">12</h2>
                        <p className="mt-1 text-sm text-[#64748B]">Interactions This Month</p>
                    </div>

                </div>

                <div className="mt-6 border-b border-gray-200"></div>

            </div>

        </section>
    );
};

export default Banner;
