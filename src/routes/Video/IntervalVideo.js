import React, { Component } from 'react';
import { connect } from 'dva';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import Container from './Container'
export default class IntervalVideo extends Component {
  state = {
    inputValue: 1,
  };
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };
  render() {
    let t = this;
    return (
      <Container/>
    );
  }
}
