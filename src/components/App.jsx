import { useState } from 'react'
import './App.css'
import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'
import Notification from './Notification/Notification'

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState({good: 0,neutral: 0,bad: 0})
 
  const updateFeedback = feedbackType => {
setFeedbackTypes({
			...feedbackTypes,
  [feedbackType]: feedbackTypes[feedbackType] + 1
});
 }
  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
       {totalFeedback === 0 ? 
        <Notification />:<Feedback good={feedbackTypes.good} bad={feedbackTypes.bad} neutral={feedbackTypes.neutral} />
      }
      
      
    </>
  )
}

export default App
