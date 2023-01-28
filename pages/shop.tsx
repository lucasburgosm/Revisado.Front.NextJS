import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Product from '../src/components/Product';
import { Products } from '../Interface/interface';
import {Modal, Form, Button} from 'react-bootstrap';
const {shopTitle, productListContainer } = require('../styles/Shop.module.css');



type Props = {    
    products : Products[],
    nbHits?: number,
    queryObject?: {},
    userID?: string,
   
}
export const getServerSideProps: GetServerSideProps<{ data: Props }> = async () => {
  const apiUrl = process.env.API_URL;
  
  const res = await fetch(`${apiUrl}/api/products/all`, {
      method: 'GET',
      credentials: "include",
  });
  const data : Props = await res.json()
  return {
    props: {
      data,
    },
  }
}


function shop({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) : JSX.Element {


if(!data){return <p>No se pudo conectar con el servidor, intente mas tarde</p>}  

const {products, nbHits, userID, queryObject} = data;
const productsList : JSX.Element[] = products.map((product) : JSX.Element =>{  return ( 
                <Product key={product._id}  props={product}>
                    <Button  variant="outline-secondary" >Comprar</Button>
                </Product> )})

return( 
    <> 
      <div className={shopTitle} >
        Productos disponibles
      </div>
      <div className={productListContainer}>
        {productsList}
      </div>
    </>
)}




export default shop;