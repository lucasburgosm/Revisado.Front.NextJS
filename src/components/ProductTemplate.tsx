import {FC} from 'react';
import { Products } from '../../Interface/interface';
import styles from '../../styles/components/Product.module.css';
import Image from 'next/image';
import playPNG from 'public/playstation4.png'


type Props = {
    children?: JSX.Element,
}  

const ProductTemplate : FC<Props> = ({children}) => {


    return (
      <div className={styles.cardContainer}>
          <Image src={playPNG} alt=""  width={200} height={200}/>
          <div className={styles.temp2} >Marca</div>
          <div className={styles.temp3} >Modelo: $500</div>    
          {children}    
      </div>
  )}

  export default ProductTemplate;