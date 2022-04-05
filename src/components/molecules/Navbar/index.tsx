import React from 'react';

import Image from 'next/image';

import Button from '@components/atoms/Button';
import NavItem from '@components/atoms/NavItem';
import { NAVS } from '@utils/constants';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <Image
          src="/images/finantier-logo.png"
          width={150}
          height={40}
          alt="Finantier logo"
        />
      </div>
      <div className="hidden md:flex space-x-10">
        {NAVS.map((nav, i) => (
          <NavItem nav={nav} key={i} />
        ))}
      </div>
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10">
        <NavItem
          nav={{
            title: 'Support',
            href: '/support',
          }}
        />
        <NavItem
          nav={{
            title: 'Sign in',
            href: '/sign-in',
          }}
        />
        <Button>Try demo</Button>
      </div>
    </div>
  );
};

export default Navbar;
