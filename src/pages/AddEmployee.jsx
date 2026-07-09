import Layout from "../components/layout/layout";
import { useState } from "react";
function AddEmployee() {
  const [employee, setEmployee] = useState({
    name:"",
    email:"",
    department:"",
    designation:""
  });
  const handleChange = (e)=>{
    setEmployee({
      ...employee,[e.target.name]:e.target.value
    });
  };
  const handleSubmit =(e)=> {
    e.preventDefault();
    console.log(employee);
  }
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>Add Employee</h1>
        <input type="text" name= "name" placeholder="Enter Employee Name" value={employee.name} onChange={handleChange}/>
        <input type="text" name="email" placeholder="Enter Employee Email" value={employee.email} onChange={handleChange}/>
        <input type="text" name="department" placeholder="Enter Employee Department" value={employee.department} onChange={handleChange}/>
        <input type="text" name="designation" placeholder="Enter Employee Designation" value={employee.designation} onChange={handleChange}/>
        <button type="submit">Save Employee</button>
      </form>
    </Layout>
  )
}
export default AddEmployee;