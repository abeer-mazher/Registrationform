import React, { useState } from 'react'
import Input from './Input'
import DropDown from './DropDown'
import UserData from './UserData';


function FormContainer() {

  let [users,setUsers] = useState([]);
  let [fName,setFName] = useState("")
  let [lName,setlName] = useState("")
  let [email,setEmail] = useState("")
  let [passowrd,setPassword] = useState("")
  let [Org,setOrg] = useState("")
  let [Field,setField] = useState("")
  let [Course,setCourse] = useState("")

  const register =(e)=>{
    e.preventDefault();
    const data = [...users,{fName,lName,email,passowrd,Org,Field,Course}]
    setUsers(data);
    setFName("");
    setlName("");
    setEmail("");
    setPassword("");
    setOrg("");
    setField("");
    setCourse("");

  }
  return (
    <>
    <form action="" onSubmit={register}>
    <div className='h-scrren w-full px-2 py-2 '>
        <div className='w-8/12 m-auto grid gap-4 grid-cols-2 px-4 py-3 border shadow-lg'>
          <Input label="first Name" type="text" place="john" value={fName} setValue={setFName}/>
          <Input label="Last Name" type="text" place="Doe" value={lName} setValue={setlName}/>
          <Input label="Email" type="email" place="john@doe.com" classes="col-start-1 col-end-3" value={email} setValue={setEmail}/>
          <Input label="password" type="password" place="password" classes="col-start-1 col-end-3" value={passowrd} setValue={setPassword}/>
          <Input label="Organization Name" type="text" place="ABC Organiztion" classes="col-start-1 col-end-3" value={Org} setValue={setOrg}/>

          <DropDown label="Field Name" options={["engineering","medical","arts","Commerce"]} classes="col-start-1 col-end-3" value={Field} setValue={setField}/>
          <DropDown label="Course Name" options={["Mern Stack","Python","Designing","Ai"]} classes="col-start-1 col-end-3" value={Course} setValue={setCourse}/>          

          <div className='col-start-1 col-end-3'>
            <button className='w-full bg-blue-600 text-white py-2'>Register</button>
          </div>
        </div>
    </div>
    </form>
    <UserData users={users}/>
    </>
    
  )
}

export default FormContainer