import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserProfile from '../../interfaces/userprofile.interface';
import { MockUserProfiles } from '@/mockdata';

import { RootState } from '../store';

export interface UserProfileState {
  user: UserProfile;
}
const initialState: UserProfileState = {
  user: MockUserProfiles[0],
};

export const userProfileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserProfile: (state, action: PayloadAction<UserProfile>) => {
      const isMatch = state.user.id === action.payload.id;
      if (isMatch) {
        state.user.firstName = action.payload.firstName;
        state.user.lastName = action.payload.lastName;
        state.user.email = action.payload.email;
        state.user.profileImage = action.payload.profileImage;

        console.log(
          'updateUserProfile: firstName: ' + action.payload.firstName
        );
      }
    },
  },
});

const currentUser = (state: RootState) => state.currentUser.user;

export const currentUserSelector = createSelector(
  [currentUser, (currentUser) => currentUser],
  (currentUser) => currentUser
);

export const { updateUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
