import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendar, FaHome,FaUtensils, FaBook, FaUsers,FaList } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';
// import '../App.css';

const DashBoard = () => {

    const [cart] = useCart();
    // const isAdmin = true;
    const [isAdmin] =useAdmin();

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  bg-[#D1A054] ">

                    {
                        isAdmin ? <>

                            <li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils>Add an Item</NavLink></li>

                            <li><NavLink to='/dashboard/history'><FaList></FaList>Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaBook></FaBook>Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers>All Users</NavLink></li>
                            

                        </> : <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservations'><FaCalendar></FaCalendar>Calendar</NavLink></li>

                            <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>

                            <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart
                                <span className="badge inline badge-secondary">{cart?.length || 0}</span>
                            </NavLink></li>
                        </>
                    }




                    <div className="divider"></div>


                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'>Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order</NavLink></li>



                </ul>

            </div>
        </div>
    );
};

export default DashBoard;