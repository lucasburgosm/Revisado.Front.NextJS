import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Product from '../src/components/Product';
import { Products } from '../Interface/interface';
const {shopTitle, productListContainer } = require('../styles/Shop.module.css');

type Props = {    
    products : Products[],
    nbHits?: number,
    queryObject?: {},
    userID?: string,
   
}
export const getServerSideProps: GetServerSideProps<{ data: Props }> = async () => {
  const res = await fetch('http://localhost:3001/api/products/all', {
      method: 'GET',
  });
  const data : Props = await res.json()

  return {
    props: {
      data,
    },
  }
}
  // const url = `https://mocki.io/v1/6bf7b429-39a4-4461-936b-0b6dc856a47a`;
  // const url = `https://revisado-back.onrender.com/api/products/all`;
  // const url = "http://192.168.0.128:3001/api/products/all";

function shop({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) : JSX.Element {
const {products, nbHits, userID, queryObject} = data;
const newPro : JSX.Element[] = products.map((product) : JSX.Element => <Product key={product._id} props={product}/>)

return( 
    <> 
      <div className={shopTitle} >
        Productos disponibles
      </div>
      <div className={productListContainer}>
        {newPro}
      </div>
    </>
)}




export default shop;