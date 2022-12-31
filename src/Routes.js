import { Route, Switch } from "react-router-dom"
import PrimeHome from "./pages/PrimeHome/PrimeHome"
import PrimeShows from "./pages/PrimeShows/PrimeShows"

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <PrimeHome />
            </Route>
            <Route path='/prime-shows'>
                <PrimeShows />
            </Route>
        </Switch>
    )
}

export default Routes