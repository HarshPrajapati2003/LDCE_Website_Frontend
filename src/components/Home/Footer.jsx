import React from "react";
import "./Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section mt-1">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">L.D.C.E. LOGO</p>
            <div className="ft-description">
              <div>
                L.D. College of Engineering Opp Gujarat University, Navrangpura,
                Ahmedabad - 380015. GUJARAT INDIA
              </div>
              <div className="mt-2">
                Phone No: <span className="text-blue-400">079 2630 2887 </span>
              </div>
              <div className="mt-2">
                Email:{" "}
                <span className="text-blue-400">
                  ldce-abad-dte@gujarat.gov.in
                </span>
              </div>
            </div>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Quick Links</p>
          <ul className="ft-list-items ps-0">
            <li>
              <a href="#services">CAMPUS MAP</a>
            </li>
            <li>
              <a href="#services">USEFUL LINKS</a>
            </li>
            <li>
              <a href="#services">HDFC ONLINE PAYMENT</a>
            </li>
            <li>
              <a href="#services">STUDENT INDUCTION PROGRAM</a>
            </li>
            <li>
              <a href="#services">TEAM</a>
            </li>
            <li>
              <a href="#services">AICTE FEEDBACK</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">About</p>
          <ul className="ft-list-items ps-0">
            <li>
              <Link to={"/legal"}>HISTORY</Link>
            </li>
            <li>
              <Link to={"/legal"}>ADMISSION PROCEDURE</Link>
            </li>
            <li>
              <Link to={"/legal"}>DIRECTIONS</Link>
            </li>
            <li>
              <Link to={"/legal"}>FEES & SCHOLARSHIPS</Link>
            </li>
            <li>
              <Link to={"/legal"}>COMMITTEES</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Important Info.</p>
          <ul className="ft-list-items ps-0">
            <li>
              <Link to={"/legal"}>RIGHT TO INFO. ACT</Link>
            </li>
            <li>
              <Link to={"/legal"}>MOU</Link>
            </li>
            <li>
              <Link to={"/legal"}>TEQIP</Link>
            </li>
            <li>
              <Link to={"/legal"}>MANDATORY DISCLOSURE</Link>
            </li>
            <li>
              <Link to={"/legal"}>TENDER NOTICE</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>2024 © LDCE. All rights Reserved | Design by LDCE Team</p>

        <ul className="ft-social-links ps-0">
          <li>
            <a
              href="https://linkedin.com/in/Alkaison/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://facebook.com/"
              title="FaceBook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://x.com/Alkaison/"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;