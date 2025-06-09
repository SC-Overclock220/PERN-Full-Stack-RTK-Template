import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { logoutFunction } from '../Slices/AuthSlice';

const Navbar = () => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => ({ ...state.auth }))
    return (
        <>

            {user ? <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <Link className="btn btn-ghost text-md lg:text-xl" to="/">RTK PERN CRUD</Link>
                </div>
                <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-auto" />
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='my-2' ><p className='text-center'>Sagnik Chakraborty</p></li>

                            <li>
                                <Link className="justify-between" to='/profile'>
                                    Profile
                                </Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={() => dispatch(logoutFunction())}><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div> : <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </div>
            </div>}



        </>
    )
}

export default Navbar