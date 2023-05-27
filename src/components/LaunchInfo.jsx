import { useEffect } from 'react'
import { timer } from '../utils/timer'
import './LaunchInfo.css'

const LaunchInfo = () => {
  useEffect(() => {
    timer()
  }, [])

  return (
    <div className="launch-info">
      <div className="launch-timer">
        <div className="launch-time">
          <div className="timer">
            <p id="days">00</p>
            <span>Days</span>
          </div>
          <div className="timer">
            <p id="hours">00</p>
            <span>Hours</span>
          </div>
          <div className="timer">
            <p id="minutes">00</p>
            <span>Minutes</span>
          </div>
          <div className="timer">
            <p id="seconds">00</p>
            <span>Seconds</span>
          </div>
        </div>
      </div>
      <div className="launch-info-text-box">
        <p className="launch-info-text">
          stay tuned for the launch and join us on this journey to be one of the
          first to embrace the future of crypto safety
        </p>
      </div>
    </div>
  )
}
export default LaunchInfo
