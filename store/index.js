import { configureStore } from '@reduxjs/toolkit';
import companySlice from './company-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    company: companySlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
