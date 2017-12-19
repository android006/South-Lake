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
  width: '18px',
  height: '6px',
  border: '1px solid #000',
  boxShadow: '1px 1px #000',
  background: '#7f7f7f',
}
const child2 = {
  position: 'absolute',
  top: '6px',
  left: '8px',
  width: '3px',
  height: '13px',
  border: '1px solid #000',
  background: '#ccc',
}
const child3 = {
  position: 'absolute',
  top: '13px',
  left: '-2px',
  borderTop: '5px solid transparent',
  borderLeft: '14px solid #cccccc',
  borderBottom: '5px solid transparent',
}
const child4 = {
  position: 'absolute',
  top: '13px',
  left: '7px',
  borderTop: '5px solid transparent',
  borderRight: '14px solid #cccccc',
  borderBottom: '5px solid transparent',
}

export default class valveTop extends Component {

  render() {
    const { left,top } = this.props;
    const text = this.props.text || '';
    const A = this.props.background || '#7f7f7f';

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
