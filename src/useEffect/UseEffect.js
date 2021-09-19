import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div style={{textAlign:"center"}}>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)} style={{padding:20, backgroundColor:"green", color:"white"}}>
        Click me
      </button>
    </div>
  );
}