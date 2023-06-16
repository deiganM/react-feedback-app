import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"

function App() {
  // App level state
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  return (
    <>
      {/* <Header text='Hello World' /> 
        - <Header /> is using a default prop now
      */}
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        {/* To add state to the 'FeedbackList' component, create a prop */}
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
