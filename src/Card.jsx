import React, { useEffect, useState } from "react";
import Common from "./Common";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";


function Card({ title, imgsrc, description, visit, btname, data, indexshow = -1, key1}) {

  const [count, setCount] = useState(0);

  const handleClick = event => {
    setCount(count + 1);
  };

  console.log(indexshow, key1, count)


  return (
    <>
      {count||(indexshow==key1) ? (
          <>
          <div id="common-1">
          <Common
            name={title}
            imgsrc={imgsrc}
            visit={visit}
            btname={btname}
            data={data}
          />
        </div>
        </>
        ):(<div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}   
            </p>
            <button className="btn btn-primary" onClick={handleClick}>{btname}</button>
          </div>
        </div>
      </div>)}
    </>
  );
}

export default Card;

