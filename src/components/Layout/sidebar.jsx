import { Link } from "react-router-dom";
function Sidebar() {
  return (
      <ul>
        <li>
        < Link to="/dashboard">Dashboard</Link> 
        </li>
        <li>
          <Link to="/employee-list">Employee List</Link>
        </li>
        <li>
            <Link to="/add-employee">Add Employee</Link>
        </li>
        <li>Logout</li>
      </ul>
  )
}
export default Sidebar;