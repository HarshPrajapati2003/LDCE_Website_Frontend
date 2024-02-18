import React from 'react'
import "./Welcome.css"
import { CheckCircle } from 'lucide-react';
const Welcome = () => {
  return (
    <div class="all-collab">
      {/* <h1>UL icon cards</h1> */}
      <ul>
        <li>
          <div className="icon">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png"
              alt="Logo"
            />
          </div>
          <div className="title">Approved by AICTE</div>
          <div className="descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            impedit?
          </div>
        </li>
        <li>
          <div className="icon">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png"
              alt="Logo"
            />
          </div>
          <div className="title">Affiliated to GTU</div>
          <div className="descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </li>
        <li>
          <div className="icon">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png"
              alt="Logo"
            />
          </div>
          <div className="title">Administered by GOG</div>
          <div className="descr">Lorem ipsum dolor sit.</div>
        </li>
      </ul>
    </div>
  );
}

export default Welcome