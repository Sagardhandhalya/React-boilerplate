import { useState } from 'react'
import Button from '../Button/Button'

const Counter = () => {
  const [c, setC] = useState(0)
  let logger = () => {
    alert('You clicked log it')
  }
  return (
    <div>
      <Button onClick={setC} text={`count ${c}`} />
      <Button onClick={logger} text="Log it" />
    </div>
  )
}

export default Counter
