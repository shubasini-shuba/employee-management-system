import Layout from "../components/layout/layout";
import { useState } from "react";
function AddEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const handleSave =()=> {
    console.log(name);
    console.log(email);
    console.log(department);
  }

  return (
    <Layout>
      <div>
        <h1>Add Employee</h1>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type="text" placeholder="Enter Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="text" placeholder="Enter Department" value={department} onChange={(e)=> setDepartment(e.target.value)}/>
        <button onClick={handleSave}>Save Employee</button>
      </div>
    </Layout>
  )
}
export default AddEmployee;