import Layout from "../components/layout/layout";

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
            </tr>
          </thead>
          <tbody>
            {
              employees.map((employee)=>(
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
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