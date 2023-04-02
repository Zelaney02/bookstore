'use client';

import Image from 'next/image';
import {
  updateUserProfile,
  currentUserSelector,
} from '../../../store/features/userProfileSlice';

import React, { ChangeEventHandler, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import UserProfile from '@/interfaces/userprofile.interface';

import Webcam from 'react-webcam';

export default function UserProfilePage({
  params,
}: {
  params: { id: number };
}) {
  const user: UserProfile = useAppSelector((state) =>
    currentUserSelector(state)
  );

  const [imgUrl, setImgUrl] = useState(user.profileImage);
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    setImgUrl(imageSrc);
  }, [webcamRef]);

  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    console.log(target.name + ' ' + target.value);

    switch (target.name) {
      case 'firstName':
        setFirstName(target.value);
        break;
      case 'lastName':
        setLastName(target.value);
        break;
      case 'email':
        setEmail(target.value);
        break;
    }
  };

  const submitHandler = () => {
    console.log('submitHandler');
    const userProfile: UserProfile = {
      id: user.id,
      firstName,
      lastName,
      email,
      profileImage: user.profileImage,
      billingStatus: true,
    };

    dispatch(updateUserProfile(userProfile));
  };

  let userFullName = firstName + ' ' + lastName;
  return (
    <main>
      <div className="grid grid-cols-2 gap-2 pt-8">
        <div className="grid grid-cols-3 flex justify-center">
          <div className="col-start-2 pb-8">
            <label
              htmlFor="photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Photo
            </label>
            <div className="mt-2 flex items-center gap-x-3 pb-8">
              <Image
                className="w-100 h-100 rounded-full mr-4"
                src={imgUrl}
                width={100}
                height={100}
                alt={userFullName}
              />

              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={capture}
              >
                Capture photo
              </button>
            </div>
            <Webcam
              audio={false}
              height={720}
              screenshotFormat="image/jpeg"
              width={1280}
              ref={webcamRef}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log('submitHandler');
              const userProfile: UserProfile = {
                id: user.id,
                firstName,
                lastName,
                email,
                profileImage: imgUrl,
                billingStatus: true,
              };
              console.log(userProfile);
              dispatch(updateUserProfile(userProfile));
            }}
            className="grid lg:grid-cols-1 w-4/6 gap-2"
          >
            <div className="input-type">
              <label
                htmlFor="firstname"
                className="inline-block tet-gray-800 text-right"
              >
                First Name:
              </label>
              <input
                type="text"
                value={firstName}
                onChange={handleChange}
                id="firstName"
                name="firstName"
                className="border w-full px-5 py-3 focus:outline-none rounded-md"
                placeholder="FirstName"
              />
            </div>
            <div className="input-type">
              <label
                htmlFor="lastname"
                className="inline-block tet-gray-800 text-right"
              >
                Last Name:
              </label>
              <input
                type="text"
                value={lastName}
                onChange={handleChange}
                id="lastName"
                name="lastName"
                className="border w-full px-5 py-3 focus:outline-none rounded-md"
                placeholder="LastName"
              />
            </div>
            <div className="input-type">
              <label
                htmlFor="email"
                className="inline-block tet-gray-800 text-right"
              >
                Email:
              </label>
              <input
                type="text"
                value={email}
                onChange={handleChange}
                id="email"
                name="email"
                className="border w-full px-5 py-3 focus:outline-none rounded-md"
                placeholder="Email"
              />
            </div>

            <div className="flex gap-10 items-center pb-8">
              <span>Billing Status:</span>
              <div className="form-check">
                <input
                  type="radio"
                  value="1"
                  id="billingstatus1"
                  name="bsGroup"
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                />
                <label
                  htmlFor="billingstatus1"
                  className="inline-block tet-gray-800"
                >
                  Paid
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  value="0"
                  id="billingstatus2"
                  name="bsGroup"
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                />
                <label
                  htmlFor="billingstatus2"
                  className="inline-block tet-gray-800"
                >
                  Unpaid
                </label>
              </div>
            </div>

            <button
              className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
