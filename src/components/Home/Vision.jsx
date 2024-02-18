import React from "react";
import "./Vision.css"
import Mission from "./Mission";
import Welcome from "./Welcome";

const PrivacyCenter = () => {

  return (
    <>
      <div className="privacy-center">
        <div className="privacy-center--header">
          <h1>Welcome To LDCE</h1>
        </div>
        <div className="privacy-center--body">
          <div className="privacy-center-intro">
            <p>
              L. D. College of Engineering endearingly known as L.D.C.E is
              Ahmedabad’s premier engineering college situated at the city’s
              heart and surrounded by elite organization like PRL, ATIRA, ISRO,
              IIM and CEPT. Starting in 1948 to impart quality higher education
              in various fields of engineering, it has seen unprecedented
              growth. It is affiliated with Gujarat Technological University &
              administrated by Department of Technical Education, Government of
              Gujarat.
            </p>
          </div>
        </div>
      </div>
      <Welcome/>
    </>
  );
};

export default PrivacyCenter;