import React from "react";
import "../scss/HomeThreeColumns.scss";

export default function HomeThreeColumns() {
  return (
    <section id="three-columns">
      <div className="container">
        <div className="stats">
          <div className="stats-1">
            <h2>10</h2>
            <span>ODDANYCH WORKÓW</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              veritatis commodi ullam voluptatem, sapiente minus quas ex quia
              laborum a!
            </span>
          </div>
          <div className="stats-2">
            <h2>5</h2>
            <span>WSPARTYCH ORGANIZACJI</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              veritatis commodi ullam voluptatem, sapiente minus quas ex quia
              laborum a!
            </span>
          </div>
          <div className="stats-3">
            <h2>7</h2>
            <span>ZORGANIZOWANYCH ZBIÓREK</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              veritatis commodi ullam voluptatem, sapiente minus quas ex quia
              laborum a!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
