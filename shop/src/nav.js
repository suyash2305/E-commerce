// import React from "react";
// import './nav.css'

// const Nav = () => {
//   return (
//     <div id="main">
//       <div id="logo"></div>
//         <div id="parent">
//           <div id="child1" className="box"> Home </div>
//           <div id="child2" className="box"> Shop </div>
//           <div id="child3" className="box"> Blog </div>
//           <div id="child4" className="box"> About </div>
//           <div id="child5" className="box"> Contact Us </div>
//         </div>
//     </div>
//   );
// };

// export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  // const navigate=useNavigate();
  // const handlecheck=()=>{
  //   navigate('/contact')
  // }

  
  return (
    <header>
      <div id="header">
        <div className="header-logo">
          <a href="indext.html">
            <img src="./images/Logo2.png" alt="" />
          </a>
        </div>
        <div class="header-list">
          <nav class="header-list-nav">
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/shop"> Shop </Link>
              </li>
              <li>
                <Link to="/blog"> Blog </Link>
              </li>
              <li>
                <Link to="/about"> About Us </Link>
              </li>
              <li>
                <Link to="/contact"> Contact Us </Link>
              </li>
            </ul>
          </nav>
          <div class="header-list-icon">
            <a href=".js">
              <i class="fa fa-bag-shopping"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
