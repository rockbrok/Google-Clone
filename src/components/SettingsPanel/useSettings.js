import { useEffect, useState } from 'react';

export const useTheme = () => {
const [count, setCount] = useState(0);
useEffect(() => {
    <div>{count}</div>
  }, [count]);

  
};