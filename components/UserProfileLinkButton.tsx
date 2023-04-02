'use client';

import React from 'react';
import { currentUserSelector } from '../store/features/userProfileSlice';

import { useAppSelector } from '../store/store';
import Image from 'next/image';

interface Props {
  className?: string;
}
const UserProfileLinkButton = (props: Props) => {
  const currentUser = useAppSelector(currentUserSelector);
  return (
    <div className="flex items-center pl-2">
      <div className="p-2">
        <span className="text-center text-slate-600">
          {currentUser.firstName},{currentUser.lastName}
        </span>
      </div>
      <Image
        className="w-10 h-10 rounded-full"
        src={currentUser.profileImage}
        width={20}
        height={20}
        alt={currentUser.firstName}
      />
    </div>
  );
};

export default UserProfileLinkButton;
