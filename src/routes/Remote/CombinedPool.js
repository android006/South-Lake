import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon} from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import request from "../../components/Request/request";
import Block from './component/Block'
import styles from  './combinedPool.less'
export default class CombinedPool extends Component {
  state = {
    block: [ //显示框的定位及颜色
      {name:'03_AIW272.0_V',text:'1',top: '41%', left: '23.7%',},
      {name:'03_AIW272.1_V',text:'2',top: '41%', left: '37.5%',},
      {name:'03_AIW272.2_V',text:'3',top: '41%', left: '50.5%',},
      {name:'03_AIW272.3_V',text:'4',top: '41%', left: '63%',},
      {name:'03_AIW272.4_V',text:'5',top: '41%', left: '72%',},
    ]
  }
  // componentDidMount(){
  //   let t = this;
  //   request({
  //     url: '/realTimeData/getRealTimeDataByTableCode',
  //     method:'GET',
  //     params:{
  //       tableCode: 'zhsc'
  //     }
  //   }).then((data) => {
  //     let block = [...t.state.block];
  //     block[0].text= data.ret['03_AIW272.0_V'];
  //     block[1].text= data.ret['03_AIW272.1_V'];
  //     block[2].text= data.ret['03_AIW272.2_V'];
  //     block[3].text= data.ret['03_AIW272.3_V'];
  //     block[4].text= data.ret['03_AIW272.4_V'];
  //
  //     t.setState({
  //       block,
  //     })
  //   })
  // }
  render() {
    const {block} = this.state;
    return (
      <div className={styles.bg}>
        {
          block.map(({top, left,background,text}, index) => (
            <Block
              left={left}
              top={top}
              background={background}
              text={text}
            />
          ))
        }
      </div>
    );
  }
}
