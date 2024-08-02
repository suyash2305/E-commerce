import Site from "./site";
import Shop from "./shop";
import Blog from "./blog";
import About from "./aboutus";
import Contact from "./contactus";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Site></Site>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        
      </Routes>
     
    </div>
  );
};

export default App;
