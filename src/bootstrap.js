import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import { usePromiseTracker } from "react-promise-tracker"

import "./style/main.scss";

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker()
  
  return (
    promiseInProgress &&
    <h1>Async call in progress</h1>
  )
}

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <App />
      <LoadingIndicator />
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
