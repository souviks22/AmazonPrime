import { Route, Switch } from "react-router-dom"
import PrimeHome from "./pages/PrimeHome/PrimeHome"

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <PrimeHome />
            </Route>
        </Switch>
    )
}

export default Routes