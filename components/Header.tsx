'use client';
import Link from 'next/link';
import React from 'react';
import ShoppingCartButton from './ShoppingCartButton';
import UserProfileLinkButton from './UserProfileLinkButton';

export default function Header() {
  return (
    <header className="top-0 p-4 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-3xl flex item-center w-100">
      <Link href={'/'}>
        <h5 className="cursor-pointer hover:scale-110 px-5">Home</h5>
      </Link>
      <Link href={'/products'}>
        <h5 className="cursor-pointer hover:scale-110 px-5">Products</h5>
      </Link>
      <Link href={'/cart'}>
        <div className="cursor-pointer flex justify-between">
          <h5 className="hover:scale-110 px-1">Cart</h5>
          <ShoppingCartButton />
        </div>
      </Link>

      <Link
        href={'/userprofiles/1'}
        className="flex md:flex md:flex-grow flex-row justify-end space-x-1"
      >
        <UserProfileLinkButton />
      </Link>
    </header>
  );
}
