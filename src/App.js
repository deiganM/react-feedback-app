import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'

function App() {
  return (
    <>
      {/* <Header text='Hello World' /> 
        - <Header /> is using a default prop now
      */}
      <Header />
      <div className='container'>
        <FeedbackItem />
      </div>
    </>
  )
}

export default App