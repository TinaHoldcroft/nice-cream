import Layout from '../components/layout';
import '../styles/styles.css';
import Head from 'next/head';
import Loader from '../components/loader';
import { useEffect, useState } from "react";


function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState();
    //setLoading(false);
   /* useEffect(() =>{
        setTimeout(() => setLoading(true), 2500);
    })*/

    return (
       
        <> 
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
   
            <Layout>
                {!loading ? ( 
                    <Component {...pageProps} />
                        ) : (
                    <Loader/>
                )}
            </Layout>

            <noscript>You need to enable JavaScript to run this app</noscript>
        </>
    )
}

export default MyApp;