import { Link } from "react-router-dom";

import React from "react";

const Navbar = () => {
    return ( 
        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" >My Forum</Link>
  </div>
</nav>
     );
}
 
export default Navbar;
