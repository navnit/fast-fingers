import './App.css'
import AppNav from "./components/AppNav.tsx";
import GamePage from "./components/GamePage.tsx";
import HomePage from "./components/HomePage.tsx";
import {useState} from "react";

function App() {

    const [mode, setMode] = useState("home")


    return (
        <>
            <AppNav/>
            {mode === "home" && <HomePage setMode={setMode}/>}
            {mode !== "home" &&
                <GamePage mode={mode} setMode={setMode}/>}
        </>
    )
}

export default App
