import Navbar from "./navbar";
import Sidebar from "./sidebar";
import "./layout.css";

function Layout({children}) {
  return (
      <>
      <Navbar/>
      <div className="layout-container">
      <Sidebar/>
      <main className="main-content">
        {children}
      </main>
      </div>
      </>
  )
}
export default Layout;
