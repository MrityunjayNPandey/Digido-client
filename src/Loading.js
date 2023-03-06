import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./98431-loading-animation.json";
import "./App.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Loading() {
  return (
    <div>
      <header className="App-header">
        <Lottie options={defaultOptions} height={300} width={300} />
      </header>
    </div>
  );
}

export default Loading;
