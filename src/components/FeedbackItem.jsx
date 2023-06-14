import {useState} from 'react'

function FeedbackItem() {
  // Setting the state, pass the default as the argument. State is a HOOK
  // destructuring an array from what 'useState(7)' returns?
  // 'rating' is the state, 'setRating' is the function to update the state
    //  - function is named by adding 'set' to the state name
  const [rating, setRating] = useState(7)
  const [text, setText] = useState("Example Feedback item")


  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  )
}

export default FeedbackItem