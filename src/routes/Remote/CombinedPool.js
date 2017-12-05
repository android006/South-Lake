import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon} from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import styles from  './combinedPool.less'
export default class CombinedPool extends Component {
  render() {
    return (
      <div className={styles.bg}>
        <div className={styles.Block1}></div>
        <div className={styles.Block2}></div>
        <div className={styles.Block3}></div>
        <div className={styles.Block4}></div>
        <div className={styles.Block5}></div>
      </div>
    );
  }
}
