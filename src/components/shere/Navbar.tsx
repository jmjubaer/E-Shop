import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import NavLink from "./UI/NavLink";
import { FiPackage } from "react-icons/fi";

const Navbar = () => {
    return (
        <div>
            <div className=' py-3  sticky top-0 bg-white z-20 shadow-md'>
                <div className='container flex items-center justify-between'>
                    <Link href='/' className='flex items-center space-x-2'>
                        <div className='w-9 h-9 gradient_bg rounded-lg flex items-center justify-center'>
                            <span className='text-white font-bold text-lg'>
                                E
                            </span>
                        </div>
                        <span className='text-xl font-bold text-gray-900'>
                            E Shop
                        </span>
                    </Link>
                    <nav>
                        <ul className='flex items-center gap-5'>
                            <li>
                                <NavLink
                                    exact
                                    href={"/"}
                                    activeClassName='bg-primary text-white hover:bg-primary'
                                    className={
                                        "flex items-center px-5 rounded py-2 text-black gap-3 hover:bg-black/10"
                                    }>
                                    <IoHomeOutline /> Home
                                </NavLink>
                            </li>{" "}
                            <li>
                                <NavLink
                                    href={"/orders"}
                                    activeClassName='bg-primary text-white hover:bg-primary'
                                    className={
                                        "flex items-center gap-3 hover:bg-black/5 px-5 rounded py-2 text-black"
                                    }>
                                    <FiPackage /> Orders
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    href={"/cart"}
                                    activeClassName='bg-primary text-white hover:bg-primary'
                                    className={
                                        "flex items-center gap-3 text-black hover:bg-black/5 px-5 rounded py-2"
                                    }>
                                    <span className='w-fit h-fit relative'>
                                        <FaShoppingCart />
                                        <span className='bg-red-500 w-4 h-4 absolute -top-3 -right-3 flex items-center justify-center rounded-full text-white text-xs'>
                                            <span className=''>0</span>
                                        </span>
                                    </span>
                                    Cart
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
