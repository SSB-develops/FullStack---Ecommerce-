import { CssBaseline, GlobalStyles } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"


function App() {


  return (
    <>
    <BrowserRouter>
      <CssBaseline />
        <GlobalStyles
          styles={{
            body: { margin: 0, padding: 0 },
          }}
        />
      
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    
    </BrowserRouter>   
     
    </>
  )
}

export default App
