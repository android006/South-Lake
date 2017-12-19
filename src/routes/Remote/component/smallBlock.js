import React, { Component } from 'react'

const style = {
  width: '0.6vw',
  height: '1.4vh',
  position: 'absolute',
  zIndex: '2',
  textAlign: 'center',
  lineHeight: '12px'
}

export default class smallBlock extends Component {

  render() {
    const { left,top } = this.props;
    const text = this.props.text || '';
    const background = this.props.background || '#f6f421';

    return (
      <div style={{ ...style, left,top,background}}>
        {text}
      </div>
    )
  }
}
