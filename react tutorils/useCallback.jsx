import React, { useCallback, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Using useCallback to memoize this function
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
