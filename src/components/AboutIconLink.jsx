import { FaQuestion } from "react-icons/fa"
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className="about-link">
      {/* Use 'Link' to link to internal pages, href can be use for external */}
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink