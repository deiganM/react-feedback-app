import { createContext, useState, useEffect } from 'react'
// import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

// Acts like a wrapper/a slot
export const FeedbackProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
  // Now getting data from db.json
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  // Empty Array. We only want this to run upon loading
  useEffect(() => {
    fetchFeedback()
  }, [])

  // fetch feedback
  const fetchFeedback = async () => {
    // json server lets you add a query to the end
    // using a proxy set in package.json to get URL ('http://localhost:5000')
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    // setting the feedback from db.json
    setFeedback(data)
    // To remove the loading spinner
    setIsLoading(false)
  }


  // delete feedback
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  // Add feedback
  const addFeedback = async (newFeedback) => {
    // making POST call to the backend. 
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(newFeedback)
    })

    const data = await response.json()
    
    // To give my newFeedback object an id
    // To give a unique id in frontend before json server
    // newFeedback.id = uuidv4()

    // remember state is immuteable, basically have to make a copy
    // adding the new one then [...feedback] is getting/adding what's already there
    setFeedback([data, ...feedback])
  }
  // This was just for frontend, before json server
  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4()
  //   setFeedback([newFeedback, ...feedback])
  // }

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? 
    {...item, ...updItem } : item))
  }

  // Set item to be updated.
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return <FeedbackContext.Provider value={{
    // STATE
    feedback,
    feedbackEdit,
    isLoading,
    // FUNCTIONS
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext