import { useSelector, useDispatch} from "react-redux";
import {
  pause,
  reset,
  startTimer,
  setDurationBreak,
  setDurationTimer,
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
  const durationTimer = 15;
  const durationBreak = 4;

  return (
    <div>
      <h2>STATUS: {episode} for you</h2>
      <p>{time}</p>
      <button onClick={() => {isPausing === "false" && statusTimer === "active" ? dispatch(pause()) : dispatch(startTimer())}}>{statusTimer === "active" ? "Pause" : isPausing === "true" ? "Continue" : "Start"}</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(setDurationTimer({durationTimer: durationTimer}))}>Change Duration Timer</button>
      <button onClick={() => dispatch(setDurationBreak({durationBreak: durationBreak}))}>Change Duration Break</button>

    </div>
  )
}