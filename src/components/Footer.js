import React from "react";

import FooterList from "./footer/FooterList";
import Bottom from "./footer/Bottom";

function Footer(props) {
  return (
    <footer>
      <div className="container">
        <FooterList />
        <Bottom />
      </div>
    </footer>
  );
}

export default Footer;
