import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <div class="footer">
      <link rel="stylesheet" href="path/to/fontawesome.min.css"></link>
      <div className="leftfooter">
        <a class="footerTxt" href="tel:+14084255347">
          <FontAwesomeIcon icon="fas fa-phone fa-flip" />
          {/*creates phone icon*/}
          Call us today at (408)-435-5347
        </a>

        <a class="footerTxt" href="mailto:Swensens5@yahoo.com">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          Send an Email: Swensens5@yahoo.com
        </a>
      </div>
      <div>
        <p class="footerTxt">Copyright &copy; 2023 ACRV Storage</p>
      </div>
    </div>
  );
}
