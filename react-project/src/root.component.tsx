import { useState } from "react";

export default function Root(props) {
  const [counter, setCounter] = useState(0);
  return <div>
    React Counter: {counter}
  </div>;
}
