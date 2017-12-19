import React, { Component } from 'react';
import { connect } from 'dva';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import Container from './Container'
export default class PumpVideo extends Component {
  render() {
    let t = this;
    return (
        <Container/>
    );
  }
}
