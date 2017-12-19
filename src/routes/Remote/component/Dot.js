import React, { Component } from 'react'

const style = {
  width: '1.4vw',
  height: '2.87vh',
  border: 'none',
  borderRadius: '50%',
  position: 'absolute',
  zIndex: '2',
}

export default class Dot extends Component {

  render() {
    const { left,top } = this.props;
    const text = this.props.text || '';
    const background = this.props.background || '#52fe55';

    return (
      <div style={{ ...style, left,top,background}}>
        {text}
      </div>
    )
  }
}
