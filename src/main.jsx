import { nanoid } from "nanoid";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const DATA = [
  { id: `todo-${nanoid()}`, name: "Eat", completed: true },
  { id: `todo-${nanoid()}`, name: "Sleep", completed: false },
  { id: `todo-${nanoid()}`, name: "Repeat", completed: false },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App tasks={DATA} />
  </StrictMode>
);
