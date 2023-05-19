import './Header.module.css';
import Image from '../../lib/images/Logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyAuthContext } from '../../Context/Context';

const Header = () => {
  const { currentUser, setCurrentUser, logOut } = useContext(MyAuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        setCurrentUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className='flex justify-between items-center bg-slate-600 px-10'>
      <div>
        <Link to='/'>
          <img className='p-3' src={Image} alt='' />
        </Link>
      </div>

      <nav>
        <ul className='list-none flex justify-between items-center text-white'>
          <li>
            <Link to='/shop' className='pl-5'>
              Shop
            </Link>
          </li>
          <li>
            <Link to='/orders' className='pl-5'>
              Orders
            </Link>
          </li>
          <li>
            <Link to='/inventory' className='pl-5'>
              Inventory
            </Link>
          </li>
          <li>
            <Link to='/login' className='pl-5'>
              Login
            </Link>
          </li>
          <li>
            <Link to='/resister' className='pl-5'>
              Resister
            </Link>
          </li>
        </ul>
      </nav>
      <div className='flex p-2 whitespace-nowrap'>
        <button
          onClick={handleLogout}
          className='inline-flex items-center bg-white border-0 py-3 px-3 focus:outline-none  hover:bg-green-400 hover:text-white rounded-s-md text-base mt-4 -mr-3 w-24 md:mt-0 font-semibold'
        >
          Log out
        </button>
        <div className='flex items-center bg-slate-500 px-3 py-1 rounded-e-md'>
          <div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'>
            <img
              className='rounded-full'
              src='https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg'
              width='60'
              height='60'
              alt='user-photo'
            />
          </div>
          <div className='font-medium text-white'>
            {currentUser ? currentUser?.email : 'no user here'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
