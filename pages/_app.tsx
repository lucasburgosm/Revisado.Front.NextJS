import '../styles/globals.css'
import '../styles/footer.scss'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout'
import UseContextLogin from '../src/Hooks/UseContextLogin'
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';

function MyApp({ Component, pageProps, ...AppProps }: AppProps) {

const getContent = () => {
        if ([`/nosotros`].includes(AppProps.router.pathname)) 
            { return  (<Component {...pageProps} /> )}
    return (
            <Layout>
                <Component {...pageProps} />
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

