import React, {useState} from 'react';
import {Form,Button} from 'react-bootstrap';


const Login = ({data}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const onSubmitSignin=(e)=>{
        e.preventDefault()
        email===data.email && password===data.password ? 
alert('Anda telah Login.'):
alert('Anda gagal login. Email dan/atau Password salah,')}

return (
    <Form onSubmit={(e)=>onSubmitSignin(e)}>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit" onClick="signIn()">
      Submit
    </Button>
  </Form>
)
}



export default Login