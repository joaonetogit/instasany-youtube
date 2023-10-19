'use client';

// Core
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Libraries
import { twMerge } from 'tailwind-merge';

// Constants
import { navHeader } from '@/constants/Header';

// Medias
import LogoImg from '/public/assets/logo.svg';
import SearchIcon from '/public/assets/icon-search.svg';
import IconUser from '/public/assets/icon-user.svg';

// Components
import GridContainer from './Grid';

const Header = () => {
  const currentRoute = usePathname();
  const activedStyle = 'bg-green-actived text-opacity-100 rounded-full';
  const styleNormalMenu =
    'flex items-center justify-center px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all';

  return (
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer className="flex items-center justify-between">
        <Image src={LogoImg} alt="Logo" />
        <div className="flex items-center gap-20">
          <nav className="flex gap-2">
            {navHeader.map((nav: { href: string; label: string }) => (
              <Link
                className={
                  currentRoute === nav.href
                    ? twMerge(styleNormalMenu, activedStyle)
                    : styleNormalMenu
                }
                key={nav.label}
                href={nav.href}
              >
                {nav.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <button>
              <Image src={SearchIcon} alt="Icon search" />
            </button>
            <button className="flex items-center gap-2">
              <Image src={IconUser} alt="Icon User" />
              <span className="text-white font-medium">Fazer login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
};

export default Header;
