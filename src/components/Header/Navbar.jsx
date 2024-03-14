
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Search from '../../assets/icons/search.svg'
import useAuthContext from '../../hooks/useAuthContext'
import Avatar from '../avatar/Avatar'
import Logout from '../auth/Logout'
import usePortalContext from '../../hooks/usePortalContext'

const Navbar = () => {
    const { auth } = useAuthContext()
    const { user } = auth
    const { setIsPortalOpen } = usePortalContext()
 
    return (
        <div>
            <nav className="container ">

                <div>
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>


                <div>
                    <ul className="flex items-center space-x-5">
                        <li>
                            <Link to="/createBlog"
                                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                            >
                                Write
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <button onClick={() => setIsPortalOpen(true)} className='flex px-1'>
                                    <img
                                    
                                        src={Search}
                                        alt="Search"
                                    />
                                    <span className='px-2'>Search</span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            {
                                user ? <Logout />
                                    :
                                    <>
                                        <Link
                                            to="/login"
                                            className="text-white/50 hover:text-white transition-all duration-200"
                                        >
                                            Login
                                        </Link>
                                    </>
                            }
                        </li>
                        <li className="flex items-center">

                            <div className="avater-img bg-orange-600 text-white">
                                {user && <Avatar author={user} />}

                            </div>

                            <Link to="/me">
                                <span className="text-white ml-2">
                                    {user?.firstName}  {user?.lastName}
                                </span>
                            </Link>

                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar