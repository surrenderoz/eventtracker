// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Nav from "./components/nav/index.tsx";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from "./pages/register.tsx";
import Thanks from "./pages/thanks.tsx";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Nav />}></Route>
        <Route  path="/add" element={<Register />}></Route>
        <Route  path="/thanks" element={<Thanks />}></Route>
      </Routes>
    </Router>
  )
	
}

export default App;
