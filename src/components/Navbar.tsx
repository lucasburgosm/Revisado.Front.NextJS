import { FC, useState, useEffect } from 'react';
import { useLoginContext} from "../Hooks/UseContextLogin";
import CustomLink from './CustomLink';
import revisadoLogo from '../../public/logo-revisado.png'
import Image from 'next/image'
import openMenuIcon from 'public/open-menu.svg'
import closeMenuIcon from '../../public/close-menu.svg'






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
    



    const userLogin = useLoginContext();
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
        <Image src={revisadoLogo} alt="logo" width="200" style={{marginBottom:"4px"}} />
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
    // <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Toggle Menu</button>
    <Image onClick={() => setIsMenuOpen(!isMenuOpen)} src={openMenuIcon} style={{ maxWidth: "35", maxHeight: "35px", width: "5vw", height: "auto", paddingTop:'10px', cursor:'pointer' }} alt="open menu icon"/>

    }




    <div className={`side-menu ${isMenuOpen ? 'open' : 'closed'}`}>
        <div className='headerButtonsWrapper'>

            <Image onClick={() => setIsMenuOpen(!isMenuOpen)} src={closeMenuIcon} style={{ maxWidth: "35", maxHeight: "35px", width: "5vw", height: "auto", paddingTop:'10px', cursor:'pointer' }} alt="open menu icon"/>
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