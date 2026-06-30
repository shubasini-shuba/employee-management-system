import Navbar from "./navbar";
import Sidebar from "./sidebar";

function Layout({children}) {
  return (
      <>
      <Navbar/>
      <div style={{display:"flex"}}>
      <Sidebar/>
      <div style={{padding:"20px", width:"100%"}}>
        {children}
      </div>
      </div>
      </>
  )
}
export default Layout;
