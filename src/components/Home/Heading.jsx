import React from 'react'
import "./Heading.css"
const Heading = ({title}) => {
    return (
      <div className="heading-div">
        <div className="privacy-center--header">
                <h1>{ title}</h1>
        </div>
      </div>
    );
}

export default Heading