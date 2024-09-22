import { useState } from "react"

const User = (props) => {
  let [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button onClick={() => {setCount(count+1)}}>Add count</button>
      <h2>{props.name}</h2>
      <h3>Vadodara, GJ</h3>
      <h4>+91-7567522469</h4>
    </div>
  )
}

export default User