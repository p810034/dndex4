import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import TaskBoard from "./pages/TaskBoard/TaskBoard.component";

const tasks = [
  {
    title: "component",
    tasks: [<input type="text" />, <button>button</button>]
  },
  {
    title: "Add",
    tasks: []
  },
  {
    title: "delete",
    tasks: []
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<TaskBoard tasks={tasks} />, rootElement);