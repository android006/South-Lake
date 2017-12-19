import React, { Component } from 'react'
import {color} from "../../../components/Charts/MiniProgress/index";

const style = {
  width: '3vw',
  height: '2.3vh',
  lineHeight:'2.3vh',
  fontSize:'12px',
  textAlign: 'center',
  position: 'absolute',
  zIndex: '2',
}

export default class Block extends Component {

  render() {
    const { left,top ,unit} = this.props;
    const text = this.props.text || '';
    let color = '';
    const background = this.props.background || '#040000';
    if (background === '#040000'){
      color = '#00ff00'
    }

    return (
      <div style={{ ...style, left,top,background,color}}>
        {text} <span style={{paddingLeft:'10px'}}>{unit}</span>
      </div>
    )
  }
}
