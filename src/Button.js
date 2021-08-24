import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const label = this.props.label;
    let className = "btn btn-primary col";
    className += this.props.size ? "-"+this.props.size : "";
    className += this.props.noMargin ? "" : " me-3";

    return (
      <button type="button" className={className} onClick={this.props.onClick}>{label}</button>
    )
  }
}


