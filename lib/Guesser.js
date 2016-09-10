import React, { Component } from 'react'

class Guesser extends Component {
  constructor() {
    super()
    this.state = {
      guess:        '',
      inputGuess:   '',
      secretNumber: '',
      maxNum:       100,
      minNum:       0,
      message:      'Start Guessing'
    }
    this.userGuessInput  = this.userGuessInput .bind(this)
    this.issueMessage    = this.issueMessage   .bind(this)
    this.clearInputField = this.clearInputField.bind(this)
    this.makeStuffHappen = this.makeStuffHappen.bind(this)
    this.hitTheYeButton  = this.hitTheYeButton .bind(this)
    this.userMinInput    = this.userMinInput   .bind(this)
    this.userMaxInput    = this.userMaxInput   .bind(this)
  }

  componentWillMount(){
    this.generateRandomNumber()
  }

  generateRandomNumber() {
    const { minNum, maxNum } = this.state
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum)
    this.setState({ secretNumber: randomNumber })
  }

  userGuessInput(event) {
    const guessInput = event.target.value
    this.setState({ guess: guessInput, inputGuess: guessInput})
  }

  userMinInput(event) {
    const minInput = event.target.value
    this.setState({ minNum: parseInt(minInput) })
  }

  userMaxInput(event) {
    const maxInput = event.target.value
    this.setState({ maxNum: +maxInput })
  }

  issueMessage() {
    const { guess, secretNumber, minNum, maxNum } = this.state
    this.setState({ inputGuess: '' })
    if (+guess > maxNum || +guess < minNum) return this.setState({message: 'Guess within the limit'})
    if (+guess === secretNumber)            return this.setState({message: 'Finally'})
    if (+guess > secretNumber)              return this.setState({message: 'Too high'})
    if (+guess < secretNumber)              return this.setState({message: 'Too low'})
  }

  clearInputField() {
    return this.setState({ inputGuess: '' })
  }

  hitTheYeButton() {
    this.clearInputField()
    this.setState({ minNum: 0, maxNum: 100, message: 'Start Guessing'})
    this.generateRandomNumber()
  }

  winGame() {
    const { guess, secretNumber, minNum, maxNum } = this.state
    if (+guess === secretNumber) {
      this.setState({ minNum: minNum - 10, maxNum: maxNum + 10, message: 'Start Guessing' })
      this.generateRandomNumber()
    }
  }

  makeStuffHappen() {
    const { guess, secretNumber } = this.state
    debugger
    this.clearInputField()
    this.issueMessage()
    this.winGame()
  }

  render() {
    return(
    <div className='number-guesser'>
      <h1 className='random-number'>SecretNumber: {this.state.secretNumber}</h1>
      <h1 className='display-guess'>Your Guess Is: {this.state.guess}</h1>
      <h1 className='display-message'>{this.state.message}</h1>
      <h1 className='display-min'>Your Min is {this.state.minNum}.</h1>
      <h1 className='display-max'>Your Max is {this.state.maxNum}.</h1>
      <input
        className='guess-input'
        type='number'
        value={this.state.inputGuess}
        onChange={this.userGuessInput}
      />
      <button
        className='submit-guess'
        onClick={this.makeStuffHappen}
      >
        Guess
      </button>
      <button
        className='clear-button'
        disabled={!this.state.inputGuess}
        onClick={this.clearInputField}
      >
        Clear
      </button>
      <button
        className='reset-game'
        disabled={!this.state.inputGuess && this.state.minNum === 0 && this.state.maxNum === 100}
        onClick={this.hitTheYeButton}
      >
        Reset Game
      </button>
      <h4>Set Min Value: </h4>
      <input
        className='min-value-input'
        type='number'
        value={this.state.minNum}
        onChange={this.userMinInput}
      />
      <h4>Set Max Value: </h4>
      <input
        className='max-value-input'
        type='number'
        value={this.state.maxNum}
        onChange={this.userMaxInput}
      />
    </div>
  )
}

}



export default Guesser
