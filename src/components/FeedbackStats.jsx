import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
  // calculate ratings average
  // const average = feedback.reduce((accumulator, feedback) => {
  //   return accumulator + feedback.rating
  // }, 0) / feedback.length

  function average() {
    const average = feedback.reduce((accumulator, feedback) => {
      return accumulator + feedback.rating
    }, 0) / feedback.length

    return isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, '')
  }

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average()}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired
}

export default FeedbackStats