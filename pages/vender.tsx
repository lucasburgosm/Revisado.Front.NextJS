import Product from '../src/components/Product';
import { useState, useEffect } from 'react';
import { userLoginContext} from "../src/Hooks/UseContextLogin";
const {shopTitle, productListContainer } = require('../styles/Shop.module.css')
import CustomLink from '../src/components/CustomLink';
import { Button, ButtonGroup } from 'react-bootstrap';
import CustomModalFormProducts from '../src/components/CustomModalFormProducts';
import { Products } from '../Interface/interface';


function Vender() : JSX.Element  {

  const userLogin = userLoginContext();
  const [data, setData] = useState<null | any>(false);
  const [singleProduct, setSingleProduct] =  useState<undefined | Products>(undefined);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [singleShow, setSingleShow] = useState(false);
  const [method, setMethod] = useState<"POST" | "PATCH" | "DELETE" >("POST")

  useEffect(() => {
    const fetchAssets = async () => {
      setLoading(true);
      try { 
        const res = await fetch('http://localhost:3001/api/products', {
          credentials: "include",
          headers:  { 'Authorization': `${userLogin.token}`},
        });
        const resData = await res.json();
        setData(resData);
        setLoading(false);
      } catch (error) {console.error(error)}
    }
    fetchAssets();
  }, [])


if(userLogin?.token === null){  return (
    <div className={shopTitle} >
    Para vender, ingresa o registrate <CustomLink dir="/login/" text="Aqui" className="btn btn-success btn-sm " />
    </div> )
  }
if (!data) return <p>No se pudo conectar con el servidor, intente mas tarde</p>
if (isLoading) return <p>Loading...</p>

  const products : Products[]   = data.Products;
  const productList : JSX.Element[] = products?.map((product : any) : JSX.Element => {
              const handleClick = (method : "PATCH" | "DELETE" )=> {
                  setSingleShow(true);
                  setSingleProduct(product);
                  setMethod(method);
              }
        return (  
              <div key={product._id}> 
                  <Product  props={product}>
                      <ButtonGroup aria-label="Basic example">
                        <Button  variant="outline-secondary" >Pause</Button>
                        <Button  variant="outline-primary" onClick={() => handleClick("PATCH") } >Edit</Button>
                        <Button variant="outline-danger"  onClick={() => handleClick("DELETE") }>Remove</Button>
                      </ButtonGroup>
                  </Product>
                  <CustomModalFormProducts key={product._id} method={method} show={singleShow} handleClose={() => setSingleShow(false)} data={singleProduct} />
              </div> )})


return( 
    <> 
      <div className={shopTitle}> 
        <Button variant="success" onClick={ () => setShow(true)}> Sell new product </Button>
      </div>
      <CustomModalFormProducts show={show} handleClose={() => setShow(false)}  method='POST' />
      <div className={productListContainer}>
        {productList}
      </div>
    </>
   
)}



export default Vender;