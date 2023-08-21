import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
function App() {
  const router = useRoutes(routes);
  return 
  <>
    {router}
  </>;
}

export default App;
