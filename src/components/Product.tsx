import {FC} from 'react';
import { Products } from '../../Interface/interface';
import styles from '../../styles/components/Product.module.css';
import Image from 'next/image';


type Props = {
    props : Products,
    children?: JSX.Element,
}  

const Product : FC<Props> = ({props, children}) => {


const {_id, modelName, brand, price } = props;


    const id = `/shop/${_id}`
    return (
      <div className={styles.cardContainer}>
          <Image src={`/${modelName}.png`} alt=""  width={200} height={200}/>
          <div className={styles.temp2} >{brand?.toUpperCase()}</div>
          <div className={styles.temp3} >{modelName?.toUpperCase()}: ${price}</div>    
          {children}    
      </div>
  )}

  export default Product;