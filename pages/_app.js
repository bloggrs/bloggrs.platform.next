import Head from 'next/head';
import Script from "next/script";
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AuthProvider } from '../lib/auth';
import "../styles/global.css";

function MyApp({ Component, pageProps, blog, pages }) {
  return (
    <AuthProvider>
      <Script 
        src="http://localhost:4444/dist/bloggrs.umd.js"
        strategy="beforeInteractive"
      />
      <Head>
        <link rel="stylesheet" href="/purecssframework.css"/>
        <title>Create Next Appsddsa</title>
      </Head>
      <>
        <Header/>
          <div className='main-container'>
            <Component {...pageProps} />
          </div>
        <Footer/>
      </>
    </AuthProvider>
  )
}

export default MyApp