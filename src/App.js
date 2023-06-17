import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <Router>
      {/* Context API requires a "provider" to have access to state and context */}
      <FeedbackProvider>
      <Header />
        <div className="container">
          <Routes>
            <Route
              exact path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  {/* To add state to the 'FeedbackList' component, create a prop */}
                  <FeedbackList />
                </>
              }>
            </Route>
            <Route 
              path="/about" 
              element={
                <>
                  <AboutPage />
                </>
              } 
            />
          </Routes>
          <AboutIconLink />
        </div>
      </FeedbackProvider>
    </Router>
  )
}

export default App
