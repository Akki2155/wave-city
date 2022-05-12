import React from "react";

function Navbar() {
 return(
     <div id="navbar-container">
       <div className="navbar-logo">
        <img src="data:image/png;base64,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"
               alt="wave city logo" />
       </div>
       <div className="navbar-links">
          <ol>
              <a href="#">About</a>
              <a href="#">Product</a>
              <a href="#">PMAY</a>
              <a href="#">Construction Update</a>
              <a href="#">News</a>
              <a href="#">Contact Us</a>
          </ol>
       </div>
     </div>
    )
}

export default Navbar;