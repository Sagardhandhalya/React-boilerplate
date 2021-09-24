import App from './App'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import FeedbackContext from './context/FeedbackContext'
FeedbackContext
ReactDOM.render(
  <Router>
    <FeedbackContext>
      <App />
    </FeedbackContext>
  </Router>,
  document.getElementById('root')
)
