import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-yellow-800 text-white shadow sm:items-baseline w-full">

                <div className="mb-2 sm:mb-0 flex flex-row">
                    <div className="h-10 w-10 self-center mr-2">
                        {/* <img src={icon} alt="icon" /> */}
                    </div>
                    <div>
                        <NavLink to="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-Roboto font-bold">Dream Travel</NavLink><br />
                    </div>
                </div>

                <div className="sm:mb-0 self-center">

                    <NavLink to="/home" activeStyle={{ fontWeight: "bold", color: "khaki" }} className="text-md no-underline ml-3 px-1">Home</NavLink>

                    <NavLink to="/about" activeStyle={{ fontWeight: "bold", color: "khaki" }} className="text-md no-underline ml-3 px-1">About</NavLink>

                    {
                        user?.email ?

                            <>
                                <NavLink to="/myOrders" activeStyle={{ fontWeight: "bold", color: "khaki" }} className="text-lg no-underline ml-3">My Orders</NavLink>

                                <NavLink to="/manageAllOrders" activeStyle={{ fontWeight: "bold", color: "khaki" }} className="text-md no-underline text-grey-darker ml-3 px-1">Manage All Orders</NavLink>

                                <NavLink to="/addEvent" activeStyle={{ fontWeight: "bold", color: "khaki" }} className="text-md no-underline text-grey-darker ml-3 px-1">Add New Event</NavLink>

                                <span className="text-yellow-300 mx-3"> {user.displayName} </span>
                                <button className="text-white" onClick={logOut}>Log-Out</button>
                            </>
                            :
                            <NavLink to="/signIn" activeStyle={{ fontWeight: "bold", color: "khaki" }} className="text-md no-underline text-grey-darker ml-3 px-1">Log-In</NavLink>
                    }

                </div>
            </nav>
        </div>
    );
};

export default Header;