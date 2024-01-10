import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import Mainlayout from "./Layouts/Mainlayout"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Shop from "./pages/Shop"
import AddPage from "./pages/AddPage"
import Wishlist from "./pages/Wishlist"
import Details from "./pages/DetailPage"

function App() {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/details/:id" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
