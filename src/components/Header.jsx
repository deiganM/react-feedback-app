import PropTypes from 'prop-types'

// function Header(props) {
function Header({ text, bgColor, textColor}) {
  // the destructured way
  const headerStyles = { 
    backgroundColor: bgColor,
    color: textColor
  }
  return (
    // Use two curly braces for styles, and CSS rules need to be camel case
    <header style={headerStyles}>
      <div className="container">
        {/* <h2>{props.text}</h2> */}
        <h2>{text}</h2>
      </div>
    </header>
  )
}

// creating a default prop
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

// If you need to define prop types
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header