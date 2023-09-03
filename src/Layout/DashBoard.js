import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendar, FaHome } from 'react-icons/fa';
const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <li><Link><FaHome></FaHome>User Home</Link></li>
                    <li><Link><FaCalendar></FaCalendar>Calendar</Link></li>

                    <li><Link><FaWallet></FaWallet>Payment History</Link></li>
                    <li><Link><FaShoppingCart></FaShoppingCart>My Cart</Link></li>
                    <div className="divider"></div>
                    <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                    <li><Link></Link></li>
                    <li><Link></Link></li>
                    <li><Link></Link></li>


                </ul>

            </div>
        </div>
    );
};

export default DashBoard;