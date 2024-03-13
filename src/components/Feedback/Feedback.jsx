function Feedback({good, bad, neutral}) {
  return (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
      </ul>
  )
}

export default Feedback