import Link from 'next/link';
import {FC} from 'react';


interface prop {
    children?: JSX.Element,
    dir : string, 
    text? : string, 
    className? : string, 
    custom? : boolean,
}
const CustomLink : FC<prop> = ({dir , text , className , custom = false, children})  => {  
return ( 
    <Link href={dir} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        {custom ? true : <button className={className}> {text} </button> }
        {children}   
    </Link>)}


export default CustomLink;