function Feedback({good, bad, neutral, totalFeedback}) {
  return (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {good + neutral + bad} </li>
          <li>Positive: { Math.round(((good + neutral) / totalFeedback) * 100)}%</li>
      </ul>
      
  )
}

export default Feedback