"use client"
import ReduxProvider from '@/store/redux-provider';
import Link from 'next/link';
import Toggle from './toggle';

function NavBar() {
  return (
    <ReduxProvider>
      <nav className="w-full bg-[#f2f2ef] border-gray-200 dark:bg-gray-900">
        <div className="w-[80%] flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <Link href="/">Eshkon</Link>
          </span>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Toggle />
          </div>
        </div>
      </nav>
    </ReduxProvider>
  );
}

export default NavBar;
