import '../styles/globals.css'
import '../styles/footer.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout'
import LayoutShop from '../src/components/Layout_shop'
import UseContextLogin from '../src/Hooks/UseContextLogin'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Router from "next/router";


export default function MyApp({ Component, pageProps, ...AppProps }: AppProps) {
    const [loading, setLoading] = useState(false)
    const [targetRoute, setTargetRoute] = useState("");
    Router.events.on("routeChangeStart", (url) => {
        setLoading(true);
        setTargetRoute(url);
    });
    Router.events.on("routeChangeComplete", () => {
        setLoading(false);
    });

    const getContent = () => {

        if ([`/nosotros`].includes(AppProps.router.pathname)) { return (<Component {...pageProps} />) }
        if (targetRoute === "/shop") {
            return (
                <Layout>
                    {loading ?
                    <>
                        <h1 style={{padding:'50px 0',textAlign:'center'}}> Shop is loading, be patient... <br></br>it may take from 1 second to 5 years....<br></br> The host where the server is hosted is very sloooow...</h1>
                        <LayoutShop></LayoutShop>
                    </>

                        :
                        <Component {...pageProps} />}
                </Layout>

            )
        }
        else return (
            <Layout>
                {loading ?
                    <p>loading...</p>
                    :
                    <Component {...pageProps} />}
            </Layout>
        )
    }

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
    )
}