import {Modal, Form, Button} from 'react-bootstrap';
import { Products  } from '../../Interface/interface';
import handleSubmitProducts from '../utils/handleSubmitProducts';
import {FC} from 'react';

interface Props {
  show : boolean,
  handleClose() : void,
  method : "POST" | "PATCH" | "DELETE",
  data?: Products,
}

const CustomModalFormVender : React.FC<Props> = ({ show ,handleClose, method, data } )   => {
   

  const url : string = data ? `https://revisado-back.onrender.com/api/products/${data?._id}` : `https://revisado-back.onrender.com/api/products` ;
  const dataKeys : readonly string[] = ["brand", "price", "modelName", "nameToDisplay", "details","modelNumber"] ;
  
  const MyButton = (method :  "POST" | "PATCH" | "DELETE")  => {
    if(method === "POST"){return(     
    <Button variant="success"  type="submit">
      Vender
    </Button> )}
    if(method === "PATCH"){return(     
        <Button variant="primary"  type="submit">
          Modificar
        </Button> )}
    if(method === "DELETE"){return(     
      <Button variant="danger"  type="submit">
        Eliminar
      </Button> )} 
}
    //
  const formEachProdocuts = dataKeys.map((obj , index)=> {
            const predefinedValue : string | number = data?.[obj as keyof typeof data] || "";
            return (
                    <Form.Group className="mb-1" key={index}>
                      <Form.Label>{`${obj.toLocaleUpperCase()}`}</Form.Label>
                      <Form.Control name={obj} type={obj}  defaultValue={predefinedValue} />
                    </Form.Group>)
        })
  
return(
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{data ? `Modificar/Borrar ${data?.modelName}` : "Nuevo Producto" }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={()=> handleSubmitProducts(window.event, url, method) }>
             {formEachProdocuts}
            <div className="form-group">
              <label>Agregar Foto</label>
              <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
            </div>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            {MyButton(method)}
          </Modal.Footer>
            </Form>
          </Modal.Body>
  
        </Modal>
    )
  }

export default CustomModalFormVender;