import {Button, Form} from 'react-bootstrap';
import { useLoginContext} from '../../src/Hooks/UseContextLogin';
import handleSubmitLogin from '../../src/components/handleSubmitLogin'



const register  = () =>  {
  const apiUrl = process.env.API_URL;

const url : string = `${apiUrl}/api/auth/register`; 

const userLogin = useLoginContext();    

return(
    <Form onSubmit={()=> handleSubmitLogin(window.event,url, userLogin, true)}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email </Form.Label>
      <Form.Control type="email" placeholder="Nuevo Email" name="email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Name" name="name" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Repeat your Password" name="passwordComfirm" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Register
    </Button>
  </Form>
  )
}
    
export default register;