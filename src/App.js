import React from "react"
import { useSelector } from "react-redux"
import useApp from "./hooks/useApp"
import Routes from "./Routes"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Backdrop from "./components/UI/Backdrop"
import './App.css'

const App = () => {
    const appClickHandler = useApp()
    const isBackdropActive = useSelector(state => state.nav.isBackdropActive)

    return (<div onClick={appClickHandler}>
        <Navbar />
        <Routes />
        <Footer />
        {isBackdropActive && <Backdrop />}
    </div>)
}

export default App