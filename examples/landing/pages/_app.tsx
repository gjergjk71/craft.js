import React from 'react';

import '../styles/app.css';
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import App from "./blogs/edit/[apikey]/[page].js";

const history = createMemoryHistory();

function MyApp({ Component, pageProps }) {
  return (
    <Router history={history}>
      {/* <App {...pageProps}/> */}
      <Component {...pageProps} />
    </Router>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
