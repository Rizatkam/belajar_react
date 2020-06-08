import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap';
const CustomInput = ({
  Label,
  type,
  value,
  matchValue,
  onChange
}) => {
  const [warning, setWarning] = useState('');
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
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>{Label}</Form.Label>
      <Form.Control onChange={(e) => onChange(e.target.value)} value={value} />
      <div style={{ color: 'red' }}>{warning}</div>
    </Form.Group>
  );
}
const Signup = ({ dataSignup, ...props }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')
  const [address, setAddress] = useState('')
  const [namaDepan, setNamaDepan] = useState('')
  const [namaBelakang, setNamaBelakang] = useState('')
  const [wa, setWa] = useState('')
  const onSubmitSignup = (e) => {
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
  return (
    <Form className="signup" onSubmit={(e) => onSubmitSignup(e)}>
      <Form.Row>
        <CustomInput
          Label="Nama Depan"
          type="firstName"
          value={namaDepan}
          onChange={(val) => setNamaDepan(val)}
        />
        <CustomInput
          Label="Nama Belakang"
          type="lastName"
          value={namaBelakang}
          onChange={(val) => setNamaBelakang(val)}
        />
      </Form.Row>
      <Form.Row>
        <CustomInput
          Label="Address"
          type="address"
          value={address}
          onChange={(val) => setAddress(val)}
        />
        <CustomInput
          Label="Nomor Whatsapp"
          type="phoneNumber"
          value={wa}
          onChange={(val) => setWa(val)}
        />
      </Form.Row>
      <Form.Row>
        <CustomInput
          Label="Email"
          type="email"
          value={email}
          onChange={(val) => setEmail(val)}
        />
        <CustomInput
          Label="Password"
          type="password"
          value={password}
          onChange={(val) => setPassword(val)}
        />
        <CustomInput
          Label="Re-Type Password"
          type="retypePassword"
          value={retypePassword}
          matchValue={password}
          onChange={(val) => setRetypePassword(val)}
        />
      </Form.Row>
      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form>
  )
}
export default Signup;