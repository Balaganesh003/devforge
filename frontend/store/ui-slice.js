import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
  isSearchOpen: false,
  isCreatePostOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleJobsModal(state) {
      state.isJobsModalOpen = !state.isJobsModalOpen;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
