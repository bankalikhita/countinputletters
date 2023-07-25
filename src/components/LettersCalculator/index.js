// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  handlechange = event => {
    const input = event.target.value
    this.setState({count: input.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="gradient">
        <div className="countdiv">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="phraseInput">Enter the phrase</label>
          <input
            className="input"
            id="phraseInput"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.handlechange}
          />
          <p className="button">No.of letters: {count}</p>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
