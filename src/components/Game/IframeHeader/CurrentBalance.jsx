import { useState } from 'react'

export const CurrentBalance = () => {
    const [balance, setBalance] = useState(1000)
  return (
    <div className='player_balance'>{balance.toFixed(2)}</div>
  )
}
