import { FC, useState, useEffect } from 'react';
import { userLoginContext} from "../Hooks/UseContextLogin";
import CustomLink from './CustomLink';
import revisadoLogo from '../../public/logo-revisado.png'
import Image from 'next/image'




const Navbar : FC = () => {

    interface Size 
    {
        width: number;
        height: number;
    }

    const [size, setSize] = useState<Size>();

    //setter
    const resizeHanlder = () => 
    {
        const width = window.innerWidth;
        const height = window.innerHeight;
    
        setSize({width: width,height: height,});
    };

    // Listening for the window resize event
    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setSize({
            width: width,
            height: height,
        });
        window.addEventListener('resize', resizeHanlder);
        
        // Cleanup function
        // Remove the event listener when the component is unmounted
        return () => {
        window.removeEventListener('resize', resizeHanlder);
        }
    }, []);



    // closes the menu automatically over 850px wide
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        if(size?.width && size.width > 850){
            setIsMenuOpen(false)
        }
    }, [size?.width])
    



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

    { !size || size?.width > 850 ? 
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

            <button className='loginButton' onClick={() => setIsMenuOpen(!isMenuOpen)}>Close Menu</button>
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