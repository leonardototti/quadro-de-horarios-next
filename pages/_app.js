import React from "react";
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

import '../styles/globals.css'
import '../styles/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import NProgress from 'nprogress'
import "nprogress/nprogress.css"

import 'react-toastify/dist/ReactToastify.min.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function Timesheet({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png"/>
        <meta name="theme-color" content="#f39200"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <meta name="language" content="Portuguese"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Timesheet
