import { configureStore } from '@reduxjs/toolkit';
import companySlice from './company-slice';
import uiSlice from './ui-slice';
import postsSlice from './posts-slice';
import onboardingSlice from './onboarding-slice';
import profileSlice from './profile-slice';

const store = configureStore({
  reducer: {
    company: companySlice.reducer,
    ui: uiSlice.reducer,
    posts: postsSlice.reducer,
    onboarding: onboardingSlice.reducer,
    profile: profileSlice.reducer,
  },
});

export default store;
