import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"

function App() {
  // App level state
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      {/* <Header text='Hello World' /> 
        - <Header /> is using a default prop now
      */}
      <Header />
      <div className="container">
        {/* To add state to the 'FeedbackList' component, create a prop */}
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
