import {useContext} from 'react'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList( { handleDelete }) {
  const {feedback} = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  } 
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem 
          key={item.id} 
          item={item} 
          handleDelete={handleDelete} 
        />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      // UUID was causing issues, UUID is a string
      // id: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
  // handleDelete: PropTypes.number
}

export default FeedbackList