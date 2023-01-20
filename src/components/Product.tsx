import Link from 'next/link';
import {FC} from 'react';
import { Products } from '../../Interface/interface';
import styles from '../../styles/components/Product.module.css'

type Props = {
    props : Products,
}  

const Product : FC<Props> = ({props}) => {
const {_id, modelName, brand, } = props
    const id = `/shop/${_id}`
    return (
      <div className={styles.cardContainer}>
          {/* <img className='temp1' src={require(`../images/${props.productImg}`)}></img> */}
          <div className={styles.temp2} >{brand}</div>    
          {props.modelName ? <div className={styles.temp3}>{modelName}</div> : <p>no existe esta prop</p> }  
            <div className={styles.temp4}>Más</div>    
      </div>
  )}

  export default Product;