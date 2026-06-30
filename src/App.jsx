import {Routes, Route} from "react-router-dom"
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import EmployeeList from './pages/EmployeeList'
import AddEmployee from './pages/AddEmployee'

function App() {

  return (
    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/employee-list" element={<EmployeeList />}/>
    <Route path="/add-employee" element={<AddEmployee />}/>
    </Routes>
  )
}

export default App
