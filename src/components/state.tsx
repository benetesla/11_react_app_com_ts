/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react'



const state = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        
    </div>
  )
}

export default state