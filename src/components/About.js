import React from 'react';
import { useState } from 'react';
function About() {
  const [toggle, settoggle] = useState({
    backgroundColor: "white",
    color: "black",
    border: "2px solid black"
  });
  const Modefun = () => {
    if (toggle.color == "black") {
      settoggle({
        backgroundColor: "black",
        color: "white",
        border: "2px solid black"
      })
    } else {
      settoggle({
        backgroundColor: "white",
        color: "black",
        border: "2px solid black"
      })
    }
  }

  return (
    <div>
      <div className='container my-5' style={toggle}>
        <main className="px-3 my-5">
          <h1 >Access the code...</h1>
          <p className="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate molestias debitis autem sed distinctio libero repellendus veniam, aperiam necessitatibus nostrum optio vitae vero! Commodi odio laborum, placeat tenetur assumenda architecto quidem porro facere quibusdam adipisci officia, illo reiciendis? Repellat eaque quisquam ab. 
          </p>
          <p className="lead">
            <a href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
          </p>
        </main>
      </div>
      <div className='buttons container'>
        <input type="button" className='btn btn-primary mx-2' onClick={Modefun} value="Enable Dark Mode" />
      </div>
    </div>
  );
}

export default About;
