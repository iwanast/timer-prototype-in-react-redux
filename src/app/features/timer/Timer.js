import { useSelector, useDispatch} from "react-redux";
import {
  pause,
  reset,
  startTimer,
  selectTime,
  selectStatusTimer,
  selectStatusPause,
  selectEpisode,
} from "./timerSlice";

export function Timer() {
  const time = useSelector(selectTime);
  const statusTimer = useSelector(selectStatusTimer)
  const isPausing = useSelector(selectStatusPause)
  const episode = useSelector(selectEpisode)
  const dispatch = useDispatch(); 

  return (
    <div>
      <h1>Timer</h1>
      <h2>STATUS: {episode} for you</h2>
      <p>{time}</p>
      <button onClick={() => {isPausing === "false" && statusTimer === "active" ? dispatch(pause()) : dispatch(startTimer())}}>{statusTimer === "active" ? "Pause" : isPausing === "true" ? "Continue" : "Start"}</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}