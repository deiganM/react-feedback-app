import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({item, handleDelete}) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      {/* 
      - handleDelete is passing data UP twice.
      - from here to FeedbackList to App
      - MESSY, there is a better way, redux?
      */}
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem