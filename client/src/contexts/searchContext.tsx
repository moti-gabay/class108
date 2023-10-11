import React, { createContext, useContext, useState } from 'react';

const InputContext = createContext();

function InputProvider({ children }) {
    const [inputValue, setInputValue] = useState('');
  
    // Function to clear the input value
    const clearInput = () => {
      setInputValue('');
    };
  
    return (
      <InputContext.Provider value={{ inputValue, setInputValue, clearInput }}>
        {children}
      </InputContext.Provider>
    );
  }

  function InputComponent() {
    // Step 3: Access the context
    const { inputValue, setInputValue, clearInput } = useContext(InputContext);
  
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={clearInput}>Clear Input</button>
      </div>
    );
  }


  function App() {
    return (
      // Step 2: Use the context provider to wrap your component tree
      <InputProvider>
        <InputComponent />
      </InputProvider>
    );
  }
  
  export default App;