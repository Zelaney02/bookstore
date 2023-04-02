import UserProfile from '@/interfaces/userprofile.interface';
import Image from 'next/image';
import React from 'react';
import AddToCartBtn from './AddToCartButton';

interface Props {
  user: UserProfile;
}
const UserProfileCard = (props: Props) => {
  const userFullName = props.user.firstName + ' ' + props.user.lastName;
  return (
    <div className="border rounded-md shadow hover:shadow-lg transition overflow-hidden">
      <Image
        className="w-50 h-50 rounded-full mr-4"
        src={props.user.profileImage}
        width={50}
        height={50}
        alt={userFullName}
      />
      <div className="p-2">
        <h6 className="text-center text-slate-600">{props.user.firstName}</h6>
        <h6 className="text-center text-slate-600">{props.user.firstName}</h6>
      </div>
    </div>
  );
};

export default UserProfileCard;
