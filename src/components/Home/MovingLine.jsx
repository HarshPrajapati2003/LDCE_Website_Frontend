import React from 'react'
import "./MovingLine.css"

const MovingLine = ({heading}) => {
  return (
    <>
      <section className="early">
        <article>
          <marquee behavior="scroll" direction="left">
            {heading}
          </marquee>
        </article>
      </section>
    </>
  );
}

export default MovingLine