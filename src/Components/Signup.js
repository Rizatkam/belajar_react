import React, {useState,useEffect} from 'react'
import {Form, Button, Col} from 'react-bootstrap';

const Signup = ({dataSignup,...props}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [retypePassword,setRetypePassword]=useState('')
    const [address,setAddress]=useState('')
    const [namaDepan,setNamaDepan]=useState('')
    const [namaBelakang,setNamaBelakang]=useState('')
    const [wa,setWa]=useState('')
    const [warning, setWarning] = useState('')
    const onSubmitSignup=(e)=>{
        e.preventDefault()
        dataSignup({
            email,
            password,
            address,
            namaDepan,
            namaBelakang,
            wa
        })
    }
    useEffect(() => {
      if (type === 'email') {
        if (!value.includes("@")) setWarning("Harus ada @-nya!");
        else if (value.length < 8) setWarning("Terlalu Sedikit, Cuy!");
        else if (value.length > 20) setWarning("Kepanjangan, Broh!");
        else (setWarning(""))
      } else if (type === 'password') {
        if (value.length < 8) setWarning("Terlalu Sedikit, Cuy!");
        else if (value.length > 20) setWarning("Kepanjangan, Broh!");
        else (setWarning(""))
      } else if (type === 'phoneNumber') {
        if (value.length < 8) setWarning("Terlalu Sedikit, Cuy!");
        else if (value.length > 16) setWarning("Kepanjangan, Broh!");
        else (setWarning(""))
      } else if (type === 'retypePassword') {
        value !== matchValue ? setWarning("Kok beda ya?")
        : setWarning("");
      } else if (type === 'address') {
        if (value.length < 10) setWarning("Terlalu Sedikit, Cuy!");
        else if (value.length > 40) setWarning("Kepanjangan, Broh!");
        else (setWarning(""))
      } else if (type === 'firstName') {
        if (value.length === 0) setWarning("Harus diisi ya!");
        else if (value.length > 15) setWarning("Kepanjangan, Broh!");
        else (setWarning(""))
      } else if (type === 'lastName') {
        if (value.length === 0) setWarning("Harus diisi ya!");
        else if (value.length > 15) setWarning("Kepanjangan, Broh!");
        else (setWarning(""))
      } else {
        setWarning("");
      }
    }, [type, matchValue, value]);
return (
    <Form className="signup" onSubmit={(e)=>onSubmitSignup(e)}>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>Nama Depan</Form.Label>
      <Form.Control type="firstName" onChange={(e)=>setNamaDepan(e.target.value)} value={namaDepan}/>
      <div style={{color:'red'}}>{warning}</div>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
    <Form.Label>Nama Belakang</Form.Label>
    <Form.Control type="lastName" onChange={(e)=>setNamaBelakang(e.target.value)} value={namaBelakang}/>
    <div style={{color:'red'}}>{warning}</div>
  </Form.Group>
</Form.Row>

<Form.Row>
<Form.Group as={Col} controlId="formGridAddress">
<Form.Label>Address</Form.Label>
<Form.Control type="address" placeholder="Jalan BlahBlahBlah" onChange={(e)=>setAddress(e.target.value)} value={address}/>
<div style={{color:'red'}}>{warning}</div>
</Form.Group>
    <Form.Group controlId="formGridPhoneNumber">
      <Form.Label>Nomor Whatsapp</Form.Label>
      <Form.Control type="phoneNumber" onChange={(e)=>setWa(e.target.value)} value={wa}/>
      <div style={{color:'red'}}>{warning}</div>
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" 
      onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <div style={{color:'red'}}>{warning}</div>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" 
      onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <div style={{color:'red'}}>{warning}</div>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Re-Type Password</Form.Label>
      <Form.Control type="retypePassword" placeholder="Re-Type Password" 
      onChange={(e)=>setRetypePassword(e.target.value)} 
      value={retypePassword}
      matchValue={password}/>
      <div style={{color:'red'}}>{warning}</div>
    </Form.Group>
    </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
)}

export default Signup