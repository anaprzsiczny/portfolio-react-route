import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home/home'
import Contact from './pages/Contact/contact'
import Portfolio from './pages/Portfolio/portolio'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contato" exact component={Contact} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Switch>
  )
}

export default Routes