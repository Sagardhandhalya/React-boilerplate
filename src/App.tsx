import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Header from './components/Header/Header'
import './App.scss'
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
