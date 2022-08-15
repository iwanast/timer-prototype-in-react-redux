import { useSelector, useDispatch} from "react-redux";
import {
  pause,
  reset,
  startTimer,
  selectTime,
  selectStatusTimer,
  selectStatusPause,
} from "./timerSlice";

export function Timer() {
  const time = useSelector(selectTime);
  const statusTimer = useSelector(selectStatusTimer)
  const isPausing = useSelector(selectStatusPause)
  const dispatch = useDispatch(); 

  return (
    <div>
      <p>{time}</p>
      <button onClick={() => {isPausing === "false" && statusTimer === "active" ? dispatch(pause()) : dispatch(startTimer())}}>{statusTimer === "active" ? "Pause" : isPausing === "true" ? "Continue" : "Start"}</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}