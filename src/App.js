import React from 'react'
// import { storeActions } from './store'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const Dispatch = useDispatch();
  const {timer, hide} = useSelector(state => state)
  //const counter = useSelector(state => state.timer)
  // const ShowOrHide = useSelector(state => state.toggle)

  const incrementHandler = () => {
    Dispatch({ type: "increment" })
  }

  const decrementHandler = () => {
    Dispatch({ type: "DECREMENT" })
  }

  const toggleBtn = () => {
    Dispatch({ type: "toggle" })
  }

  const MakeToZero = () => {
    Dispatch({type : "zero"})
  }

  return (
    <div>
      <center>
        <h1>Counter </h1>
        <h3>{timer}</h3>
        <div >
          {
            hide && (
              <>
                <div>
                  <button onClick={incrementHandler}>Increase</button>
                  <button onClick={decrementHandler}>Decrease</button>
                  <button onClick={MakeToZero}>Make To 0</button>
                </div>
              </>
            )
          }
        </div>
        <div>
          <button onClick={toggleBtn}>Toggle Button</button>
        </div>
      </center>
    </div>
  )
}

export default App