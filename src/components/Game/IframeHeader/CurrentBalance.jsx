import { useState } from 'react'

export const CurrentBalance = () => {
    const [balance, setBalance] = useState(1000)
  return (
    <div>{balance.toFixed(2)}</div>
  )
}
