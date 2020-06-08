import React, {useState} from 'react';
import Signup from '../Components/Signup2';
import Login from '../Components/Login';
import Profile from '../Components/Profile';
import {Tabs,Tab} from 'react-bootstrap';

const Home = (props) => {
    const [data,setData]=useState({})
    return(
        <Tabs defaultActiveKey="SignUp" id="uncontrolled-tab-example">
<Tab eventKey="SignUp" title="SignUp">
<Signup dataSignup={(data)=>setData(data)}/>
</Tab>
<Tab eventKey="Login" title="Login">
<Login data={data}/>
</Tab>
<Tab eventKey="Profile" title="Profile">
<Profile data={data}/>
</Tab>
</Tabs> 
      )
}

export default Home;