import { createSlice } from '@reduxjs/toolkit';

const initialPostsState = {
  companiesList: [
    {
      id: '2343423423423',
      companyName: 'Google',
      companyWebsite: 'https://www.google.com/',
      companyDescription:
        '<p>Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.</p>',
      companyLogo:
        'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      companySize: '10-50 employees',
      companyTagline: 'Do the right thing',
      companyLinkedinUrl: 'https://www.linkedin.com/company/google/',
      companyCarreerUrl: 'https://careers.google.com/',
      companyAstCareerUrl: 'https://ast.google.com/',
      companyKeyWords: 'Software company',
      aboutCompany:
        '<p>Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.</p>',
    },
  ],

  selectedCompany: null,
};

const companySlice = createSlice({
  name: 'company',
  initialState: initialPostsState,
  reducers: {
    addCompany: (state, action) => {
      const newCompany = action.payload;
      state.companiesList.some(
        (company) => company.companyName === newCompany.companyName
      )
        ? alert('Company already exists')
        : state.companiesList.push(newCompany);
    },

    updateCompany: (state, action) => {
      const updatedCompany = action.payload;
      const companyIndex = state.companiesList.findIndex(
        (company) => company.id === updatedCompany.id
      );
      state.companiesList[companyIndex] = updatedCompany;
    },
    getCompany: (state, action) => {
      const company = state.companiesList.find(
        (company) => company.id == action.payload
      );
      state.selectedCompany = company;
    },
  },
});

export const companyActions = companySlice.actions;

export default companySlice;
