import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  getSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator-img"
          />
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="label" htmlFor="inputEln">
                Enter the phrase
              </label>
              <input
                type="text"
                id="inputEln"
                onChange={this.getSearchInput}
                placeholder="Enter the phrase"
              />
            </div>
            <p className="letters-count">No.of letters: {searchInput.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
