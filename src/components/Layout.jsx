


import { Outlet,Link } from "react-router-dom"


const Layout = () => {
  return (
   <>
   <Link to="/home" >Home</Link>
   <Link to="/about" >About</Link>
   <Link to="/faculty" >Faculty</Link>
   <Link to="/ourcoures" >Our Coures</Link>
   <Link to="/contact" >Contect us</Link>
   <Link to="/color">Color</Link>
   <hr aria-setsize={3} />
   <Outlet/>
   <hr aria-setsize={3} />
   <h1>www.mycompany.com</h1>


   </>

  )
}

export default Layout