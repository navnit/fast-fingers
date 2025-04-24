import './App.css'
import {useEffect, useState} from "react";
import AppNav from "./components/AppNav.tsx";
import GamePage from "./components/GamePage.tsx";
import HomePage from "./components/HomePage.tsx";

function App() {

    const [mode, setMode] = useState("home")

    const [levelTexts, setLevelTexts] = useState([])

    function getTextsForLevel(level: number) {
        if (level === 1) {
            // pick a random 50 letters from right hand side of the keyboard


        }
    }

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
