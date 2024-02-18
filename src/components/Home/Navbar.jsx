import React from "react";
import "./Navbar.css";
import {ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <a href="#">Logo</a>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links mb-0">
            <label htmlFor="close-btn" className="btn close-btn">
              <X color="#d8315b" size={32} />
            </label>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#" className="desktop-item">
                About
              </a>
              <input type="checkbox" id="showMega1" />
              <label htmlFor="showMega1" className="mobile-item">
                About
              </label>
              <div className="mega-box">
                <div className="content">
                  {/* <div className="row">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    />
                  </div> */}
                  <div className="row">
                    <header>The Institute</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">About LDCE</a>
                      </li>
                      <li>
                        <a href="#">Principal's Message</a>
                      </li>
                      <li>
                        <a href="#">Organization Chart</a>
                      </li>
                      <li>
                        <a href="#">Intitute Committees</a>
                      </li>
                      <li>
                        <a href="#">Center Of Excellence - Siemens</a>
                      </li>
                      <li>
                        <a href="#">Center Of Excellence - Welding</a>
                      </li>
                      <li>
                        <a href="#">Newsletters</a>
                      </li>
                      <li>
                        <a href="#">Campus Drive</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Legal Forms</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">MOU</a>
                      </li>
                      <li>
                        <a href="#">Mandatory Disclosure</a>
                      </li>
                      <li>
                        <a href="#">Tender Notice</a>
                      </li>
                      <li>
                        <a href="#">TEQIP</a>
                      </li>
                      <li>
                        <a href="#">Right to info. Act</a>
                      </li>
                      <li>
                        <a href="#">Faculty and Staff list</a>
                      </li>
                      <li>
                        <a href="#">Admission & Reservation</a>
                      </li>
                      <li>
                        <a href="#">Recruitment Rules for Faculty</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Academics
              </a>
              <input type="checkbox" id="showMega2" />
              <label htmlFor="showMega2" className="mobile-item">
                Academics
              </label>
              <div className="mega-box">
                <div className="content">
                  {/* <div className="row">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    />
                  </div> */}
                  <div className="row">
                    <header>Intake</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/admissions">
                          <a href="#">BE Admission & Courses</a>
                        </Link>
                      </li>
                      <li>
                        <a href="#">PDDC Courses</a>
                      </li>
                      <li>
                        <a href="#">PG Admission & Courses</a>
                      </li>
                      <li>
                        <a href="#">Fulltime phD-ADF scheme(GTU)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Academics</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Academic Calender</a>
                      </li>
                      <li>
                        <a href="#">Brochure</a>
                      </li>
                      <li>
                        <a href="#">Fee Structure</a>
                      </li>
                      <li>
                        <a href="#">Education Verification</a>
                      </li>
                      <li>
                        <a href="#">Syllabus</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Affiliation/Approval</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">AICTE EOA</a>
                      </li>
                      <li>
                        <a href="#">AICTE Environment Policy</a>
                      </li>
                      <li>
                        <a href="#">Accredition Status</a>
                      </li>
                      <li>
                        <a href="#">GTU Affiliation</a>
                      </li>
                      <li>
                        <a href="#">NIRF</a>
                      </li>
                      <li>
                        <a href="#">LDCE Green Campus Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Departments
              </a>
              <input type="checkbox" id="showMega3" />
              <label htmlFor="showMega3" className="mobile-item">
                Departments
              </label>
              <div className="mega-box">
                <div className="content">
                  {/* <div className="row">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    />
                  </div> */}
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <a href="#">Applied Mechanics</a>
                      </li>
                      <li>
                        <a href="#">Bio Medical Engineering</a>
                      </li>
                      <li>
                        <a href="#">Chemical Engineering</a>
                      </li>
                      <li>
                        <a href="#">Civil Engineering</a>
                      </li>
                      <li>
                        <a href="#">Plastic Technology</a>
                      </li>
                      <li>
                        <a href="#">Rubber Technology</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <a href="#">Computer Engineering</a>
                      </li>
                      <li>
                        <a href="#">Electrical Engineering</a>
                      </li>
                      <li>
                        <a href="#">Electronics & Communication Engineering</a>
                      </li>
                      <li>
                        <a href="#">Environmental Engineering</a>
                      </li>
                      <li>
                        <a href="#">Textile Technology</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <a href="#">Information Technology</a>
                      </li>
                      <li>
                        <a href="#">Instrumentation & Control Engineering</a>
                      </li>
                      <li>
                        <a href="#">Science and Humanities</a>
                      </li>
                      <li>
                        <a href="#">Mechanical Engineering</a>
                      </li>
                      <li>
                        <a href="#">Automobile Engineering</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">Placement</a>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Campus Life
              </a>
              <input type="checkbox" id="showMega4" />
              <label htmlFor="showMega4" className="mobile-item">
                Campus Life
              </label>
              <div className="mega-box">
                <div className="content">
                  {/* <div className="row">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    />
                  </div> */}
                  <div className="row">
                    <header>Student Life</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">LDCE Clubs</a>
                      </li>
                      <li>
                        <a href="#">Photo Gallery</a>
                      </li>
                      <li>
                        <a href="#">National Service Scheme</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Campus Life</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">Placement Cell</a>
                      </li>
                      <li>
                        <a href="#">Entrepreneurship Cell</a>
                      </li>
                      <li>
                        <a href="#">LDCE Alumni Association</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Infrastructure</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Campus Map</a>
                      </li>
                      <li>
                        <a href="#">Canteen</a>
                      </li>
                      <li>
                        <a href="#">Library</a>
                      </li>
                      <li>
                        <a href="#">Hostel</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Innovation
              </a>
              <input type="checkbox" id="showMega5" />
              <label htmlFor="showMega5" className="mobile-item">
                Innovation & StartUps
              </label>
              <div className="mega-box">
                <div className="content">
                  {/* <div className="row">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    />
                  </div> */}
                  <div className="row">
                    <header>Innovation and Startups</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">SSIP</a>
                      </li>
                      <li>
                        <a href="#">Design Lab</a>
                      </li>
                      <li>
                        <a href="#">Patents</a>
                      </li>
                      <li>
                        <a href="#">Research Grants</a>
                      </li>
                      <li>
                        <a href="#">Incubation Center</a>
                      </li>
                      <li>
                        <a href="#">Information on Covid-19</a>
                      </li>
                      <li>
                        <a href="#">Super Computing Facility</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Conference</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">ACM-W Regional Celebration 2021</a>
                      </li>
                      <li>
                        <a href="#">National Technology Day 2022</a>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="row">
                    <header>Security services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Site Seal</a>
                      </li>
                      <li>
                        <a href="#">VPS Hosting</a>
                      </li>
                      <li>
                        <a href="#">Privacy Seal</a>
                      </li>
                      <li>
                        <a href="#">Website design</a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
                More
                <ChevronDown style={{ display: "inline-block" }} size={20} />
              </a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                More
                <ChevronDown style={{ display: "inline-block" }} />
              </label>
              <ul className="drop-menu ms-0 ps-0">
                <li>
                  <a href="#">NIRF</a>
                </li>
                <li>
                  <a href="#">ARIIA</a>
                </li>

                <li>
                  <a href="#">Student Section </a>
                </li>
                <li>
                  <a href="#">Fees Payment </a>
                </li>
                <li>
                  <a href="#">Study In Gujarat</a>
                </li>
                <li>
                  <a href="#">Grievance </a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <Menu color="#0a2463" />
          </label>
        </div>
      </nav>
      {/* <div class="body-text">
        <div class="title">Responsive Dropdown and Mega Menu lorem40</div>
        <div class="sub-title">using only HTML & CSS</div>
      </div> */}
    </>
  );
};

export default Navbar;
