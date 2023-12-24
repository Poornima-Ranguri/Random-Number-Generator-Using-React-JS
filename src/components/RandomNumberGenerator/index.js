import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  onClickingGenerate = () => {
    this.setState(prevState => ({count: Math.ceil(Math.random * 100)}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="home">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Get a random number in the <br />
            range of 0 to 100
          </p>
          <button
            type="button"
            className="btn"
            onClick={this.onClickingGenerate}
          >
            Generate
          </button>
          <p className="parag">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
