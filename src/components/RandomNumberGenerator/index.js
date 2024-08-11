import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  randomCount = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="home">
        <div className="random-home">
          <h1 className="heading">Random Number</h1>
          <p className="parag">
            Generate a random number in the <br /> range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.randomCount}>
            Generate
          </button>
          <p className="count-text">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
