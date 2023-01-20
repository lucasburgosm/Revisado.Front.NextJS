import Product from '../src/components/Product';
import { useState, useEffect } from 'react';
import { userLoginContext} from "../src/Hooks/UseContextLogin";
const {shopTitle, productListContainer } = require('../styles/Shop.module.css')
import CustomLink from '../src/components/CustomLink';
import {Modal, Form, Button} from 'react-bootstrap';

function vender() {

  const userLogin = userLoginContext();
  const [data, setData] = useState<null | any>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState(false);

    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    Para vender, ingresa o registrate<CustomLink dir="/login/" text="Aqui!!" className='loginButton' />
    </div> )
  }

if (!data) return <p>No se pudo conectar con el servidor, intente mas tarde</p>
if (isLoading) return <p>Loading...</p>



return( 
    <> 
      <div className={shopTitle} >
        Tus Productos
      </div>
      <Button variant="success" onClick={handleShow}>
        Agregar
      </Button>
      <div className={productListContainer}>
        {data?.Products}
      </div>
     {CustomModal(show, handleClose)}
    </>
)}



const CustomModal  = (show : boolean,handleClose : any) : JSX.Element => {
 
  const groupsList : string[] = ["brand", "price", "modelName", "nameToDisplay", "details"]
  const formGroups = groupsList.map((obj, index)=> {
    return (
       <Form.Group className="mb-1" controlId="exampleForm.ControlInput1" key={index}>
          <Form.Label>{`${obj.toLocaleUpperCase()}`}</Form.Label>
            <Form.Control name={obj} />
      </Form.Group>
)
  })

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
           {formGroups}
          <div className="form-group">
            <label>Agregar Foto</label>
            <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
          </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
  )
}


export default vender;