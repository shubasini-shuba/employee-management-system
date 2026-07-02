import Layout from "../components/layout/layout";
import "./dashboard.css";

const dashboardData = [
  {
    title: "Total Employees",
    value: 120
  },
  {  
    title: "Active Employees",
    value: 110
  },
  {
    title: "New Joiners",
    value: 12
  }
];
function Dashboard() {
  return(
  <Layout>
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="card-container">
        {
          dashboardData.map((item)=>{
            return (
            <div className="card">
              <h1>{item.title}</h1>
              <h2>{item.value}</h2>
            </div>
          )
          })
        }
      </div>
    </div>
    
    </Layout>
  )
}
export default Dashboard;