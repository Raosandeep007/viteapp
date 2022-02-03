import { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("called UseEffect at", Date.now());

    return () => {
      console.log("called cleanup at", Date.now());
    };
  }, [count]);
  return (
    <>
      <div>
        <h1>Example: {count}</h1>
        <button onClick={() => setCount(count + 1)}>ADD</button>
      </div>
    </>
  );
}

export { Example };
