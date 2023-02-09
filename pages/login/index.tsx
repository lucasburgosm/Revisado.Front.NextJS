import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoginContext} from '../../src/Hooks/UseContextLogin';
import handleSubmitLogin from '../../src/components/handleSubmitLogin'
import CustomLink from '../../src/components/CustomLink';



const Login  = () =>  {
  const apiUrl = process.env.API_URL;

  const userLogin = useLoginContext();
  const url : string = `${apiUrl}/api/auth/login`;


return(

    <Form onSubmit={()=> handleSubmitLogin(window.event,url, userLogin)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
        <Form.Text className="text-muted">
          Mantenga su contraseña segura.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p>No tenes cuenta?</p>
      <CustomLink dir='/login/register' custom={true}>
        <Button variant="primary" >Registrate</Button>
      </CustomLink>
    </Form>
    )
}

export default Login;