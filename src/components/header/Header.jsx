import './Header.module.css';
import Image from '../../lib/images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
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
        </ul>
      </nav>
    </div>
  );
};

export default Header;
