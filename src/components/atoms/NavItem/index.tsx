import React from 'react';

import Link from 'next/link';

import { INavItem } from '@utils/interfaces';

interface IProps {
  nav: INavItem;
}

const NavItem = ({ nav }: IProps) => {
  return (
    <Link href={nav.href} passHref shallow>
      <p className='className="cursor-pointer flex text-primary hover:text-blue-500  text-sm font-bold leading-normal items-center mt-3 lg:mt-0"'>
        {nav.title}
      </p>
    </Link>
  );
};

export default NavItem;
