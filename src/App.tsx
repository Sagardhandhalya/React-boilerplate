import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import FeatureTest from './pages/FeatureTest/FeatureTest'
import './App.scss'
import Layout from './components/Layout/Layout'
const App = () => {
  return (
    <Layout>
      <div className="App">
        <Switch>
          <Route path="/demo" exact component={FeatureTest} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Layout>
  )
}

export default App
