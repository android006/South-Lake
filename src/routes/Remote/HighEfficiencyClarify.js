import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon} from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import styles from  './highEfficiencyClarify.less'
export default class HighEfficiencyClarify extends Component {
  render() {
    return (
      <div className={styles.bg}>
        <div className={styles.Dot1}></div>
        <div className={styles.Dot2}></div>
        <div className={styles.Dot3}></div>
        <div className={styles.Dot4}></div>
        <div className={styles.Dot5}></div>
        <div className={styles.Dot6}></div>
        <div className={styles.Dot7}></div>
        <div className={styles.Dot8}></div>
        <div className={styles.Dot9}></div>
        <div className={styles.Dot10}></div>
        <div className={styles.Dot11}></div>
        <div className={styles.Dot12}></div>
        <div className={styles.Dot13}></div>
        <div className={styles.Dot14}></div>
        <div className={styles.Dot15}></div>
        <div className={styles.Dot16}></div>
        <div className={styles.Block1}></div>
        <div className={styles.Block2}></div>
        <div className={styles.Block3}></div>
        <div className={styles.Block4}></div>
        <div className={styles.Block5}></div>
        <div className={styles.Block6}></div>
        <div className={styles.Block7}></div>
        <div className={styles.Block8}></div>
        <div className={styles.Block9}></div>
        <div className={styles.Block10}></div>
        <div className={styles.Block11}></div>
      </div>
    );
  }
}
