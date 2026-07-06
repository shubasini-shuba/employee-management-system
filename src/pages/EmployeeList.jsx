import Layout from "../components/layout/layout";
import "./employeeList.css";

function EmployeeList(){
  const employees = [
    {
      id: 1,
      name: "Shubashini",
      department: "Frontend"
    },
    {
      id: 2,
      name: "Rahul",
      department: "Backend"
    },
    {
      id: 3,
      name: "Priya",
      department: "HR"
    }
  ];
  function handleEdit(employee) {
    console.log("Edit clicked");
    console.log(employee);
  }
  function handleDelete(employee) {
    console.log("Delete clicked");
    console.log(employee);
    
  }
  return(
    <Layout>
      <div className="employee-list">
        <h1>EmployeeList</h1>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Department</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              employees.map((employee)=>(
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                  <td>
                    <button className="edit-btn" onClick={()=>handleEdit(employee)}>Edit</button>
                    <button className="delete-btn" onClick={()=>handleDelete(employee)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    
    </Layout>
  )
}
export default EmployeeList;