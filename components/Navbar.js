import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

const Navbar = () => {
  const { user, isLoading } = useUser();

  return (
    <nav>
      <Link href='/'>
        <a className='font-mono text-2xl mb-2 block text-center text-red-200 uppercase'>
          WebVolt.dev
        </a>
      </Link>
      <div className='flex space-x-3 justify-center mb-6 m-x-auto'>
        {!isLoading && !user && (
          <Link href='/api/auth/login'>
            <a className='text-red-100 hover:underline'>Login</a>
          </Link>
        )}
        {!isLoading && user && (
          <>
            <Link href='/mySnippets'>
              <a className='text-red-100 hover:underline'>My Snippets</a>
            </Link>
            <Link href='/api/auth/login'>
              <a className='text-red-100 hover:underline'>Logout</a>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
