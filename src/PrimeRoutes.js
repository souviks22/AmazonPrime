import { Route, Switch } from "react-router-dom"
import PrimeHome from "./components/PrimeHome/PrimeHome"

const PrimeRoutes = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <PrimeHome />
            </Route>
            <Route path='/home'>
                <PrimeHome />
            </Route>
        </Switch>
    )
}

export default PrimeRoutes