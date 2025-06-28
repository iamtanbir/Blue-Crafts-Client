import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"


function App() {


  return (
    <div className="">
     <Navbar/>
     <Outlet/>
     <Footer/>
    </div>
  )
}

export default App
