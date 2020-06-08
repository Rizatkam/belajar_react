import React from 'react'


const Profile = (props) => {
return (
<div>
<h3>Nama Depan : {props.data.namaDepan}</h3>
<h3>Nama Belakang : {props.data.namaBelakang}</h3>
<h3>Address : {props.data.address}</h3>
<h3>No. Whatsapp : {props.data.wa}</h3>
<h3>Email : {props.data.email}</h3>
<h3>Password : {props.data.password}</h3>
</div>
)
}
export default Profile