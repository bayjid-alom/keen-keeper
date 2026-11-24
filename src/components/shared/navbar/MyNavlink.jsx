import { NavLink } from 'react-router';


const MyNavlink = ({ to, children, onClick }) => {

    return (
        <NavLink
            to={to}
            end={to === "/"}
            onClick={onClick}
            className={({ isActive }) =>
                `flex items-center gap-1.5 rounded-sm px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${isActive
                    ? "bg-[#244D3F] text-white"
                    : "text-[#64748B] hover:bg-gray-100 hover:text-[#285B49]"
                }`
            }
        >
            {children}
        </NavLink>
    );
};

export default MyNavlink;
