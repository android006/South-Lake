import React, { Component } from 'react'

const style = {
  width: '0.6vw',
  height: '1.4vh',
  position: 'absolute',
  zIndex: '2',
  textAlign: 'center',
  lineHeight: '12px'
}
const child1 = {
  position: 'absolute',
  width: '6px',
  height: '18px',
  border: '1px solid #000',
  boxShadow: '1px 1px #000',
  background: '#7f7f7f',
}
const child2 = {
  position: 'absolute',
  top: '8px',
  left: '-13px',
  width: '14px',
  height: '3px',
  border: '1px solid #000',
  background: '#ccc',
}
const child3 = {
  position: 'absolute',
  left: '-18px',
  top: '-2px',
  width: '0',
  height: '0',
  borderLeft: '5px solid transparent',
  borderTop: '14px solid #cccccc',
  borderRight: '5px solid transparent',
}
const child4 = {
  position: 'absolute',
  left: '-18px',
  top: '8px',
  width: '0',
  height: '0',
  borderLeft: '5px solid transparent',
  borderBottom: '14px solid #cccccc',
  borderRight: '5px solid transparent',
}

export default class Valve extends Component {

  render() {
    const { left,top,} = this.props;
    const text = this.props.text || '';
    const background = this.props.background || '#7f7f7f';

    return (
      <div style={{position: 'absolute',left,top}}>
        {text}
        <div style={{...child1}}></div>
        <div style={{...child2}}></div>
        <div style={{...child3}}></div>
        <div style={{...child4}}></div>
      </div>
    )
  }
}
