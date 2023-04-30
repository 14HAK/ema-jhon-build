import './Header.module.css';
import Image from '../../lib/images/Logo.svg';

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-slate-600 px-10'>
      <a href='/'>
        <img className='p-3' src={Image} alt='' />
      </a>

      <nav>
        <ul className='flex justify-between items-center text-white'>
          <a href='/home'>
            <li className='pl-5'>Order</li>
          </a>
          <a href='/about'>
            <li className='pl-5'>Order Review</li>
          </a>
          <a href='/nam'>
            <li className='pl-5'>Manage Inventory</li>
          </a>
          <a href='/bbb'>
            <li className='pl-5'>Login</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
