import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./PAGES/Home";
import Layout from "./PAGES/Layout";
import Recipes from "./PAGES/Recipes";
import Blog from "./PAGES/Blog";
import Contact from "./PAGES/Contact";
import AboutUs from "./PAGES/AboutUs";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Home} />
          <Route path="recipes" Component={Recipes} />
          <Route path="blog" Component={Blog} />
          <Route path="contact" Component={Contact} />
          <Route path="aboutUs" Component={AboutUs} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
