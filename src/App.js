import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  // App level state
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    // To give my newFeedback object an id
    newFeedback.id = uuidv4()
    // remember state is immuteable, basically have to make a copy
    // adding the new one then [...feedback] is getting/adding what's already there
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

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
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats 
                  />
                  {/* To add state to the 'FeedbackList' component, create a prop */}
                  <FeedbackList
                    handleDelete={deleteFeedback}
                  />
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
