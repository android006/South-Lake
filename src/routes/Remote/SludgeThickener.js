import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon} from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import styles from  './sludgeThickener.less'
export default class SludgeThickener extends Component {
  render() {
    return (
      <div className={styles.bg}>
        <div className={styles.Dot1}></div>
        <div className={styles.Dot2}></div>
      </div>
    );
  }
}
