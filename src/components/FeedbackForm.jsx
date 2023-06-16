import {useState} from 'react'
import Card from "./shared/Card"
import Button from './shared/Button'

function FeedbackForm() {
  // Usually have state for each input in the form
  const [text, setText] = useState('')

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
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
          <Button type='submit'>
            Send
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm