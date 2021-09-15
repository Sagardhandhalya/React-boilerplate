import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import FeatureTest from './pages/FeatureTest/FeatureTest'
import Header from './components/Header/Header'
import './App.scss'
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/demo" exact component={FeatureTest} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
