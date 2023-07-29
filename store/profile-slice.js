import { createSlice } from '@reduxjs/toolkit';

const initialProfileState = {
  socialLinks: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialProfileState,
  reducers: {
    updateSocialLinks(state, action) {
      const index = state.socialLinks.findIndex(
        (item) => item.id == action.payload.id
      );

      index === -1
        ? state.socialLinks.push(action.payload)
        : (state.socialLinks[index] = action.payload);
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice;
