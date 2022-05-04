import { Provider } from 'react-redux';
import { store } from '../store/store';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {

  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </Provider>
  )
  
}

export default MyApp;
