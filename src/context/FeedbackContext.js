import { createContext, useState } from 'react'

const FeedbackContext = createContext()

// Acts like a wrapper/a slot
export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10
    }
  ])

  return <FeedbackContext.Provider value={{
    feedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext