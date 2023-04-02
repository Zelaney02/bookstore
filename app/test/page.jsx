'use client';

import React, { useState } from 'react';
import { currentUserSelector } from '../../store/features/userProfileSlice';
import { useAppSelector } from '../../store/store';

export default function TestPage() {
  console.log('starting...');
  const user = useAppSelector((state) => currentUserSelector(state));

  const [firstName, setFirstName] = useState(user.firstName);
  console.log(firstName);

  const handleChange = (e) => {
    const newValue = e.target.value;
    console.log('Value change:');
    console.log(newValue);
    setFirstName(newValue);
  };

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
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
            id="firstname"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            placeholder="FirstName"
          />
        </div>

        <button
          className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500"
          type="submit"
        >
          Update
        </button>
      </form>
    </main>
  );
}
