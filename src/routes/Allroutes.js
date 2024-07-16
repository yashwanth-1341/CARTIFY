import { Routes,Route } from "react-router-dom"
import { Cart, Home } from "../Pages"

const Allroutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </>
  )
}

export default Allroutes
