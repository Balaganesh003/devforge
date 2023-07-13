import '@/styles/globals.css';
import store from '@/store';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.startsWith('/user')) {
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
