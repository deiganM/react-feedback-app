import {useContext} from 'react'
// import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  } 

  // return isLoading ? <h3>Loading...</h3> : (
  return isLoading ? <Spinner /> : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem 
          key={item.id} 
          item={item} />
      ))}
    </div>
  )
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       // UUID was causing issues, UUID is a string
//       // id: PropTypes.string.isRequired,
//       id: PropTypes.oneOfType([
//         PropTypes.string.isRequired,
//         PropTypes.number.isRequired,
//       ]),
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
//   // handleDelete: PropTypes.number
// }

export default FeedbackList