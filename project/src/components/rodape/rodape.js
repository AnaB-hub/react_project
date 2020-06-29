import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

import "./rodape.css";

function Rodape() {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 footer">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://github.com/AnaB-hub/react_project">
            {" "}
            Ana Beatriz Garcia{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Rodape;
