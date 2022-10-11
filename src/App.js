import React from "react"
import useApp from "./hooks/useApp"
import Navbar from "./components/Navbar/Navbar"
import PrimeRoutes from "./PrimeRoutes"
import './App.css'

const App = () => {
    const appClickHandler = useApp()
    return (<div onClick={appClickHandler}>
        <Navbar />
        <PrimeRoutes />
    </div>)
}

export default App