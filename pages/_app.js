import Head from 'next/head';
import Script from "next/script";
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AuthProvider } from '../lib/auth';
import "../styles/global.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import bloggrs from '../lib/bloggrs-sdk';
import parseBlocks from '../lib/bloggrs-ui';
import App from 'next/app';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.production.min';
import React from "react";

class MyApp extends React.Component {
  state = {
    children: []
  }
  loadChildren = async () => {
    const blocks = await parseBlocks(this.props.blocks)
    console.log(blocks)
    this.setState({
      children: blocks
    })
  }
  componentDidMount() {
    this.loadChildren();
  }
  render() {
    const { children } = this.state;
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
        <Script 
          src="http://localhost:4444/dist/bloggrs.umd.js"
          strategy="beforeInteractive"
        />
        <Head>
          <link rel="stylesheet" href="/purecssframework.css"/>
          <title>Create Next Apps</title>
        </Head>

        { children }
        {/* <Script 
          src="http://localhost:4444/dist/bloggrs.umd.js"
          strategy="beforeInteractive"
        />
        <Head>
          <link rel="stylesheet" href="/purecssframework.css"/>
          <title>Create Next Apps</title>
        </Head>
        <>
          <Header/>
            <div className='main-container'>
              <Component {...pageProps} />
            </div>
          <Footer/>
        </> */}
        <ToastContainer/>
      </AuthProvider>
    )
  }
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  await bloggrs.initPromise;
  const blog = bloggrs.blog;
  const { blocks } = blog;
  // const children = await parseBlocks(blocks);
  // console.log({ chhhhhh: children })
  return { ...appProps, blocks }
}

// function MyApp({ Component, pageProps, blocks }) {
//   console.log({ blocks })
//   const [ children, setChildren ] = useState([])
  
//   useEffect(async () => {
//     setChildren(
//       await parseBlocks(blocks)
//     )
//   },[])

//   console.log({ children })
//   console.log("SSWWWW")
//   return (
//     <AuthProvider>
//       <Script 
//         src="http://localhost:4444/dist/bloggrs.umd.js"
//         strategy="beforeInteractive"
//       />
//       { children }
//       {/* <Script 
//         src="http://localhost:4444/dist/bloggrs.umd.js"
//         strategy="beforeInteractive"
//       />
//       <Head>
//         <link rel="stylesheet" href="/purecssframework.css"/>
//         <title>Create Next Apps</title>
//       </Head>
//       <>
//         <Header/>
//           <div className='main-container'>
//             <Component {...pageProps} />
//           </div>
//         <Footer/>
//       </> */}
//       <ToastContainer/>
//     </AuthProvider>
//   )
// }


export default MyApp
