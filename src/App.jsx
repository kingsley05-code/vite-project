import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import Menu from "./components/menu.jsx";
import React from "react";

function App(){
  return(
   <div className="container">
    <Header />
    <Menu />
    <Footer />
   </div>
  );
}
export default App;