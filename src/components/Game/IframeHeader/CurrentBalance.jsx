import { useState, createContext, useContext } from 'react'

const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(1000);

  const subtractFromBalance = (amount) => {
    setBalance(prev => prev - amount);
  };

  return (
    <BalanceContext.Provider value={{ balance, setBalance, subtractFromBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error('useBalance must be used within a BalanceProvider');
  }
  return context;
};

export const CurrentBalance = () => {
  const { balance } = useBalance();
  
  return (
    <div className='player_balance'>{balance.toFixed(2)}</div>
  )
}
