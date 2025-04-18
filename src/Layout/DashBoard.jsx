import { FaAd, FaBook, FaCalendar, FaEnvelope, FaEnvelopeOpen, FaHome, FaList, FaMailBulk, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const navLinkClass = ({ isActive }) =>
    `flex items-center  gap-2 px-4 py-2 rounded-md transition-colors duration-200 
   ${isActive ? 'bg-white text-orange-600 font-semibold' : 'text-white hover:bg-orange-500'}`;

const DashBoard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-600">
                <ul className="menu ">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome" className={navLinkClass}>
                                    <FaHome></FaHome> Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems" className={navLinkClass}>
                                    <FaUtensils></FaUtensils> ADD Items</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/manageItems"
                                    className={({ isActive }) =>
                                        isActive || location.pathname.startsWith('/dashboard/updateItem')
                                            ? 'bg-white text-orange-600 font-semibold'
                                            : 'text-white hover:bg-orange-500'}>
                                    <FaList /> Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageBookings" className={navLinkClass}>
                                    <FaBook></FaBook> Manage Bookings </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users" className={navLinkClass}>
                                    <FaUsers></FaUsers> All Users</NavLink>
                            </li>
                        </> :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome" className={navLinkClass}>
                                        <FaHome></FaHome> User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/history" className={navLinkClass}>
                                        <FaCalendar></FaCalendar> Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review" className={navLinkClass}>
                                        <FaAd></FaAd> Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart" className={navLinkClass}>
                                        <FaShoppingCart></FaShoppingCart> My Cart ({cart.length}) </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory" className={navLinkClass}>
                                        <FaList></FaList> Payment & Order History</NavLink>
                                </li>
                            </>
                    }
                    {/* {shared navlink} */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/" className={navLinkClass}>
                            <FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad" className={navLinkClass}>
                            <FaSearch></FaSearch> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/contact" className={navLinkClass}>
                            <FaEnvelopeOpen></FaEnvelopeOpen> Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;