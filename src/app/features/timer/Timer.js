import { useSelector, useDispatch} from "react-redux";
import { selectDurationTimer } from "../settings/settingsSlice";
import {
  pause,
  reset,
  startTimer,
  selectStatusTimer,
  selectStatusPause,
  selectTimerEpisode,
  selectTimerValue,
} from "./timerSlice";

export function Timer() {
  const defaultTimerDuration = useSelector(selectDurationTimer)
  const time = useSelector(selectTimerValue);
  const statusTimer = useSelector(selectStatusTimer)
  const isPausing = useSelector(selectStatusPause)
  const timerEpisode = useSelector(selectTimerEpisode)
  const dispatch = useDispatch(); 

  return (
    <div>
      <h1>Pomodoro</h1>
      <h2>STATUS Timer: {timerEpisode} for you</h2>
      <p>{time === 0 && statusTimer === "idle" ? defaultTimerDuration : time}</p>
      <button onClick={() => {isPausing === "false" && statusTimer === "active" ? dispatch(pause()) : dispatch(startTimer())}}>{statusTimer === "active" ? "Pause" : isPausing === "true" ? "Continue" : "Start"}</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}