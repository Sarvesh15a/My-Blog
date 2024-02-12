import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { Navbar, TextInput, Button } from 'flowbite-react'; 

const Header = () => {
  const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-blue-500 via-purple-600 to bg-pink-500 rounded-lg text-white'>
          Yaduvesh's
        </span>
        Blog
      </Link>

      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>

      <button className='w-12 h-10 lg:hidden' color='gray'>
        <AiOutlineSearch />
      </button>

      <div className='flex gap-2 md:order-2'>
        <button className='w-12 h-10 hidden sm:inline' color='gray'>
          <FaMoon />
        </button>

        <Link to='/signin'>
          <Button gradientDuoTone='purpleToBlue' outline>
            Sign In
          </Button>
        </Link>

      </div>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>

        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>

        <Navbar.Link active={path === '/project'} as={'div'}>
          <Link to='/project'>Project</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
