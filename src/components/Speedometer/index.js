import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickAccelerateButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onclickApplyBreakButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="Speedometer-app-container">
        <div className="Speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="speedometer-img"
            alt="speedometer"
          />
          <h1 className="speed-text">Speed is {speed} mph</h1>
          <p className="speed-limit">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              className=" accelerate-button button"
              onClick={this.onClickAccelerateButton}
              type="button"
            >
              Accelerate
            </button>
            <button
              className="Apply-break-button button"
              type="button"
              onClick={this.onclickApplyBreakButton}
            >
              Apply Break
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
