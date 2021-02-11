import { NavLink, Link } from 'react-router-dom';
export function Header(props) {
    return (
        <div className='flex justify-between bg-purple-400 px-3 py-1'>
            <div>
                <Link
                    to={{
                        pathname: '/',
                        hash: '#leelawebdev',
                        search: '?channel=leelawebdev',
                        state: { dashboard: true },
                    }}
                >
                    React Router
                </Link>
            </div>
            <div>
                <ul className='flex'>
                    <li className='mr-2'>
                        <NavLink to='/' activeClassName='text-white' exact>
                            Home
                        </NavLink>
                    </li>
                    <li className='mr-2'>
                        <NavLink to='/about' activeClassName='text-white'>
                            About
                        </NavLink>
                    </li>
                    <li className='mr-2'>
                        <NavLink
                            to='/contact'
                            activeClassName='text-white'
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li className='mr-2'>
                        <NavLink to='/posts' activeClassName='text-white'>
                            Posts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
