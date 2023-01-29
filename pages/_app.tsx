import '../styles/globals.css'
import '../styles/footer.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout'
import UseContextLogin from '../src/Hooks/UseContextLogin'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Router from "next/router";


function MyApp({ Component, pageProps, ...AppProps }: AppProps) {
    const [loading, setLoading] = useState(false)
    Router.events.on("routeChangeStart", (url) => {setLoading(true)});
    Router.events.on("routeChangeComplete", (url) => {setLoading(false)});

const getContent = () => {
        if ([`/nosotros`].includes(AppProps.router.pathname)) 
            { return  (<Component {...pageProps} /> )}
    return (
            <Layout>
                {loading ? 
                <p> is loading</p> 
                : 
                <Component {...pageProps} />}
            </Layout>
    )}
        
return (
 
        <div className="allPages">
            <div className='pageContainer'>
                <div className='pageContent'>
                    <UseContextLogin>
                        {getContent()}
                    </UseContextLogin>
                </div>
            </div>
        </div>  
)}


export default MyApp

