import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(id);
          return prev;
        }
        console.log("inside useEffcet");
        return prev - 1;
      });
    }, 1000);
    return () => {
      console.log("Cleaning up any set inetervals");
      clearInterval(id);
    };
  }, []);
  //useEffect has empty dependancy
  //it will get called when the compents gets unmounted

  //if it has a dependency, count
  //it will get called, eveytime count gets updated,
  //but before the useEffect callback is triggered

  return (
    <>
      <h1>Counter: {count}</h1>
    </>
  );
}
