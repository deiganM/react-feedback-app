import {useState, useContext, useEffect} from 'react'
import Card from "./shared/Card"
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  // Usually have state for each input in the form
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const {addFeedback, feedbackEdit} = useContext(FeedbackContext)

  // This is very similar to Vue
  // good way to make HTTP requests
  useEffect(() => {
    // check to see if there's anything in 'feedbackEdit' first
    if(feedbackEdit.edit === true) {
      // When 'edit' is clicked, add text, rating, set button to enabled
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  },
  // Array of dependencies, if these change, function in useEffect() will run
  //  - if left empty, useEffect will just run on load
  [feedbackEdit]) 

  const handleTextChange = (event) => {
    // try a ternary just to see
    // return text === '' ? (setBtnDisabled(true), setMessage(null))
    //   : 

    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    // This involved global State in App.js (similar to 'deleteFeedback')
    event.preventDefault()
    if(text.trim().length > 10) {
      const newFeedback = {
        text, //text(key): text('text' value form state)
        rating // rating: rating
      }

      addFeedback(newFeedback)
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* select is a prop that is a function(see RatingSelect.jsx) 
          - I believe it's taking the rating state and running setRating?
        */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          {/* handleTextChange is getting the user input into text state */}
          <input 
            onChange={handleTextChange}
            type="text" 
            placeholder="Write a review" 
            //  the initial (default) value of the input field, text is state, which has a default of ''
            value={text}
          />
          {/* <button type="submit">Send</button> */}
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {/* Not sure if I want to start using short circuiting, look more into issues */}
        {message ? <div className='message'>{message}</div> : ''}
      </form>
    </Card>
  )
}

export default FeedbackForm