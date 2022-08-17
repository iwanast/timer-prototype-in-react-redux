import { useSelector, useDispatch } from "react-redux"
import {
  newTimerDuration,
  newBreakDuration,
  selectDurationTimer,
  selectDurationBreak,
} from "./settingsSlice"


export const Settings = () => {

  const dispatch = useDispatch();
  const timerDurationString = useSelector(selectDurationTimer).toString();
  const breakDuration = useSelector(selectDurationBreak);

  return (
    <div>
      <h1>Settings</h1>
        <label htmlFor="timerDuration">Timer Duration</label>
        <input 
          onChange={(e) => {console.log(e.target.value); dispatch(newTimerDuration({durationTimer: e.target.value}))}} 
          autoCorrect="false"
          maxLength="10"
          
          name="timerDuration" 
          id="durationTimer" 
          type="text" 
          // only for form:                                                                                                                                                                                                               pattern="^-?[0-9]\d*\.?\d*$" 
          value={timerDurationString}>
        </input>
        <label htmlFor="breakDuration">Break Duration</label>
        <input onChange={(e) => {dispatch(newBreakDuration({durationBreak: e.target.value.replace(/\D/,'')}))}} name="breakDuration" id="breakDuration" type="tel" pattern="^-?[0-9]\d*\.?\d*$" value={breakDuration} ></input>
      {/* <button onClick={() => dispatch(setDurationTimer({durationTimer: durationTimer}))}>Change Duration Timer</button>
      <button onClick={() => dispatch(setDurationBreak({durationBreak: durationBreak}))}>Change Duration Break</button> */}
    </div>
  )
}