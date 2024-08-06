import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  );
};

export default App;