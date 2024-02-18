import React from 'react'
import "./Companies.css"
import Heading from './Heading';

// https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/

const Companies = () => {
  return (
    <>
      <div className="mt-4">
        <Heading title="Placement Companies" />
      </div>
      <div class="w-full inline-flex flex-nowrap overflow-hidden mt-4 Companies">
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/gnfc.png"
              alt="Facebook"
            />
          </li>
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/welspun.png"
              alt="Disney"
            />
          </li>
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/mahindra-epc.png"
              alt="Airbnb"
            />
          </li>
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/ip-calculus.png"
              alt="Apple"
            />
          </li>
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/searce.png"
              alt="Spark"
            />
          </li>
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/ibm.png"
              alt="Samsung"
            />
          </li>
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/ford-india.png"
              alt="Quora"
            />
          </li>
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/thomson-reuters.png"
              alt="Sass"
            />
          </li>
        </ul>
        <ul
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/kivi-technologies.png"
              alt="Facebook"
            />
          </li>
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/tata-consultancy-services-tcs.png"
              alt="Disney"
            />
          </li>
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/wipro.png"
              alt="Airbnb"
            />
          </li>
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/accenture.png"
              alt="Apple"
            />
          </li>
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/cybage.png"
              alt="Spark"
            />
          </li>
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/surekha-technologies.png"
              alt="Samsung"
            />
          </li>
          <li>
            <img
              src="https://ldce.ac.in/upload/logo/company/gnfc.png"
              alt="Quora"
            />
          </li>
          <li>
            <img
              src="https://image4.owler.com/logo/tatvasoft-uk_owler_20201105_142437_original.png"
              alt="Sass"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Companies