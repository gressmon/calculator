import Button from "./Button";
import React, { Component } from 'react'
import { evaluate } from 'mathjs'

export default class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputQueue: "0",
    }
  }

  resetQueue() {
    this.setState({
      inputQueue: "0",
    });
  }

  queueInput(value) {
    let inputQueue = this.state.inputQueue;
    inputQueue += value;
    this.setState({
      inputQueue: inputQueue,
    });
  }

  resolveInput() {
    let inputQueue = this.state.inputQueue;
    inputQueue = inputQueue.replace("÷","/").replace("×","*");
    inputQueue = evaluate(inputQueue);
    this.setState({
      inputQueue: inputQueue,
    });
  }


  render() {
    const display = this.state.inputQueue;


    return (
      <div className="container d-grid gap-2">
        <div className="row">
          <p>{display}</p>
        </div>
        <div className="row">
          <Button label="C" onClick={() => this.resetQueue()} size="9" />
          <Button label="÷" onClick={() => this.queueInput("÷")} noMargin="true" />
        </div>
        <div className="row">
          <Button label="7" onClick={() => this.queueInput("7")} />
          <Button label="8" onClick={() => this.queueInput("8")} />
          <Button label="9" onClick={() => this.queueInput("9")} />
          <Button label="×" onClick={() => this.queueInput("×")} noMargin="true" />
        </div>
        <div className="row">
          <Button label="4" onClick={() => this.queueInput("4")} />
          <Button label="5" onClick={() => this.queueInput("5")} />
          <Button label="6" onClick={() => this.queueInput("6")} />
          <Button label="-" onClick={() => this.queueInput("-")} noMargin="true" />
        </div>
        <div className="row">
          <Button label="1" onClick={() => this.queueInput("1")} />
          <Button label="2" onClick={() => this.queueInput("2")} />
          <Button label="3" onClick={() => this.queueInput("3")} />
          <Button label="+" onClick={() => this.queueInput("+")} noMargin="true" />
        </div>
        <div className="row">
          <Button label="0" onClick={() => this.queueInput("0")} size="6" />
          <Button label="." onClick={() => this.queueInput(".")} />
          <Button label="=" onClick={() => this.resolveInput()}  noMargin="true" />
        </div>
      </div>
    );
  }
}

