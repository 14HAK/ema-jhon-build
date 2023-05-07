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
          <a href='/shop'>
            <li className='pl-5'>Shop</li>
          </a>
          <a href='/orders'>
            <li className='pl-5'>Orders</li>
          </a>
          <a href='/inventory'>
            <li className='pl-5'>Inventory</li>
          </a>
          <a href='/login'>
            <li className='pl-5'>Login</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
