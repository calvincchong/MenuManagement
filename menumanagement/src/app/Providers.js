'use client';

import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
// add any additional providers here

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
