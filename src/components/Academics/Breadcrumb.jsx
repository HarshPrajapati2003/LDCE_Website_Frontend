import React from "react";
import "./Breadcrumb.css"
import ScrollableTabsButtonAuto from "./ScrollableTabsButtonAuto";
const Breadcrumb = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-8 container bread">
        <div className="rounded-lg bg-gray-200">
          <div className="flex lg:justify-start justify-center items-center font-semibold">
            <div className="md:text-3xl text-2xl">Under Graduate Courses</div>
          </div>
        </div>
        <div className="rounded-lg bg-gray-200 overflow-scroll flex items-center justify-start">
          {" "}
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse mb-0 py-1 lg:ml-auto">
            {Array(1)
              .fill()
              .map((item, i) => (
                <React.Fragment key={i}>
                  <li className="inline-flex items-center">
                    <a
                      href="#"
                      className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600 text-decoration-none"
                    >
                      <svg
                        className="w-3 h-3 me-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg
                        className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <a
                        href="#"
                        className="ms-1 text-md  font-medium text-gray-700 hover:text-blue-600 md:ms-2 text-decoration-none"
                      >
                        Admission
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg
                        className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <a
                        href="#"
                        className="ms-1 text-md  font-medium text-gray-700 hover:text-blue-600 md:ms-2 text-decoration-none"
                      >
                        Under Graduate Courses
                      </a>
                    </div>
                  </li>
                </React.Fragment>
              ))}
          </ol>
        </div>
      </div>
      <ScrollableTabsButtonAuto />
    </>
  );
};

export default Breadcrumb;
