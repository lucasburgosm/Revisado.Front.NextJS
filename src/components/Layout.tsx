import Footer from './Footer';
import Navbar from './Navbar';
import {FC} from 'react';

interface prop {
   children: JSX.Element,
}

const Layout : FC<prop> = ({children}) => {
   return(<><Navbar/> {children} <Footer/></>)
}

export default Layout;