import { FC, useState, useEffect } from 'react';
import { userLoginContext} from "../Hooks/UseContextLogin";
import CustomLink from './CustomLink';
import revisadoLogo from '../../public/logo-revisado.png'
import Image from 'next/image'
import { useWindowWidth } from '../Hooks/useWindowWidth';



const Navbar : FC = () => {

    //checks width constantly
    const width = useWindowWidth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (width > 850) {
            setIsMenuOpen(false);
        }
    }, [width]);



    const userLogin = userLoginContext();
    const handleClickLogout = async (event : any) => {
        event.preventDefault();
        try { 
            await fetch("/api/logout",  { method: 'POST'});
            window.sessionStorage.clear();
            userLogin.setToken(null);
            userLogin.setUserName(null) ;
        }
       catch(error){ 
        console.log(error)}
      }


return(
    
<div className='homeHeader'>

    <CustomLink dir ="/" custom={true}>
        <Image src={revisadoLogo} alt="logo" width="200" />
    </CustomLink>

    { width > 850 ? 
        <div className='headerButtonsWrapper'>

            <CustomLink dir="/shop" text="Shop" className='navBarButtons' />
            <CustomLink dir="/nosotros" text="Nosotros" className='navBarButtons' />
            <CustomLink dir="/vender" text="Vender" className='navBarButtons nav-item dropdown' />     

            { userLogin.token === null  ? 
                <CustomLink dir="/login/" text="Login" className='loginButton' /> 
                :
                <> 
                    <CustomLink dir="/" text={`Hola ${userLogin.userName.slice(0,5)}!!`}/> 
                    <CustomLink  dir="/login/logout" custom={true}> 
                    <button className='loginButton' onClick={handleClickLogout}> Logout </button> 
                    </CustomLink>
                </> 
            }

        </div>
    :
    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Toggle Menu</button>}




    <div className={`side-menu ${isMenuOpen ? 'open' : 'closed'}`}>
        <div className='headerButtonsWrapper'>
            <CustomLink dir="/shop" text="Shop" className='navBarButtons' />
            <CustomLink dir="/nosotros" text="Nosotros" className='navBarButtons' />
            <CustomLink dir="/vender" text="Vender" className='navBarButtons nav-item dropdown' />            
            {userLogin.token === null  
                ? 
                <CustomLink dir="/login/" text="Login" className='loginButton' /> 
                :
                <> 
                <CustomLink dir="/" text={`Hola ${userLogin.userName.slice(0,5)}!!`}/> 
                <CustomLink  dir="/login/logout" custom={true}> 
                <button className='loginButton' onClick={handleClickLogout}> Logout </button> 
                </CustomLink>
            </>}   
        </div>
    </div>
</div>

)}


export default Navbar;