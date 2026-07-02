import "./sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="sidebar_menu">
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
    </nav>
  )
}
export default Sidebar;