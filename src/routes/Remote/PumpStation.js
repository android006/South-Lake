import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon,Button } from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import request from "../../components/Request/request";
import styles from  './pumpStation.less'
import Dot from './component/Dot'
import Block from './component/Block'
import Valve from './component/valve'

export default class PumpStation extends Component {
  state = {
    dot:[  //圆点的定位及颜色
      {name:'04_Pump001.State',text:'04_Pump001',top: '54%',left: '26%',background: '#fb574d'},
      {name:'04_Pump002.State',text:'04_Pump002',top: '54%',left: '39%'},
      {name:'04_Pump003.State',text:'04_Pump003',top: '54%',left: '54%'},
      {name:'04_Pump004.State',text:'04_Pump004',top: '54%',left: '67%'},
      {name:'04_Pump005.State',text:'04_Pump005',top: '39%',left: '26%'},
      {name:'04_Pump006.State',text:'04_Pump006',top: '39%',left: '39%'},
      {name:'04_Pump007.State',text:'04_Pump007',top: '39%',left: '54%'},
      {name:'04_Pump008.State',text:'04_Pump008',top: '39%',left: '67%'},
      {name:'04_Pump009.State',text:'04_Pump009',top: '26%',left: '17%'},
    ],
    block:[ //显示框的定位及颜色
      {name:'04_AO001',text:'4',top: '55%',left: '19%',background: '#fcfdf6'},
      {name:'04_AO002',text:'7',top: '55%',left: '33%',background: '#fcfdf6'},
      {name:'04_AIW272.0_V',text:'2',top: '58.1%',left: '19%'},
      {name:'04_AIW272.1_V',text:'3',top: '61%',left: '19%'},
      {name:'04_AIW272.2_V',text:'5',top: '58.1%',left: '33%'},
      {name:'04_AIW272.3_V',text:'6',top: '61%',left: '33%'},
      {name:'04_AIW272.4_V',text:'8',top: '60%',left: '52.5%'},
      {name:'04_AIW272.5_V',text:'9',top: '60%',left: '66%'},
      {name:'04_AIW272.6_V',text:'1',top: '30%',left: '30%'},
      {name:'04_AIW288.0_V',text:'10',top: '78%',left: '37%'},
      {name:'04_AIW288.1_V',text:'11',top: '78%',left: '65%',unit:'m'},
    ],
    valve:[
      {name:'04_MotorValve001.State',text:'',top:'44%',left:'31.5%'},
      {name:'04_MotorValve002.State',text:'',top:'67.2%',left:'31.5%'},
      {name:'04_MotorValve003.State',text:'',top:'44%',left:'45.4%'},
      {name:'04_MotorValve004.State',text:'',top:'67.2%',left:'45.5%'},
      {name:'04_MotorValve005.State',text:'',top:'44%',left:'59.8%'},
      {name:'04_MotorValve006.State',text:'',top:'67.2%',left:'59.7%'},
      {name:'04_MotorValve007.State',text:'',top:'44%',left:'73.2%'},
      {name:'04_MotorValve008.State',text:'',top:'67.2%',left:'73.2%'},
      {name:'04_MotorValve009.State',text:'',top:'21%',left:'41.7%'},
      {name:'04_MotorValve010.State',text:'',top:'21%',left:'59.45%'},
    ]
  };
  // componentDidMount(){
  //   let t = this;
  //   request({
  //     url: '/realTimeData/getRealTimeDataByTableCode',
  //     method:'GET',
  //     params:{
  //       tableCode: 'qsbf'
  //     }
  //   }).then((data) => {
  //     let block = [...t.state.block];
  //     block[0].text= data.ret['04_AO001'];
  //     block[1].text= data.ret['04_AO002'];
  //     block[2].text= data.ret['04_AIW272.0_V'];
  //     block[3].text= data.ret['04_AIW272.1_V'];
  //     block[4].text= data.ret['04_AIW272.2_V'];
  //     block[5].text= data.ret['04_AIW272.3_V'];
  //     block[6].text= data.ret['04_AIW272.4_V'];
  //     block[7].text= data.ret['04_AIW272.5_V'];
  //     block[8].text= data.ret['04_AIW272.6_V'];
  //     block[9].text= data.ret['04_AIW288.0_V'];
  //     block[10].text= data.ret['04_AIW288.1_V'];
  //
  //     let dot = [...t.state.dot];
  //     dot[0].text= data.ret['04_Pump001.State'];
  //     dot[1].text= data.ret['04_Pump002.State'];
  //     dot[2].text= data.ret['04_Pump003.State'];
  //     dot[3].text= data.ret['04_Pump004.State'];
  //     dot[4].text= data.ret['04_Pump005.State'];
  //     dot[5].text= data.ret['04_Pump006.State'];
  //     dot[6].text= data.ret['04_Pump007.State'];
  //     dot[7].text= data.ret['04_Pump008.State'];
  //     dot[8].text= data.ret['04_Pump009.State'];
  //
  //     let valve = [...t.state.valve]
  //     valve[0].text= data.ret['04_MotorValve001.State'];
  //     valve[1].text= data.ret['04_MotorValve002.State'];
  //     valve[2].text= data.ret['04_MotorValve003.State'];
  //     valve[3].text= data.ret['04_MotorValve004.State'];
  //     valve[4].text= data.ret['04_MotorValve005.State'];
  //     valve[5].text= data.ret['04_MotorValve006.State'];
  //     valve[6].text= data.ret['04_MotorValve007.State'];
  //     valve[7].text= data.ret['04_MotorValve008.State'];
  //     valve[8].text= data.ret['04_MotorValve009.State'];
  //     t.setState({
  //       dot,
  //       block,
  //     })
  //   })
  // }
  render() {
    const {dot, block,valve} = this.state;
    return (
      <div className={styles.bg}>
        <div className={styles.Form}>
          <div className={styles.Scale}>
            <div className={styles.ScaleGreen}></div>
          </div>
        </div>
        {/*<Button className={styles.Block1}>投入连锁</Button>*/}
        {/*<Button className={styles.Block2}>解除连锁</Button>*/}
        {
          dot.map(({top, left,background,text}, index) => (
            <Dot
              left={left}
              top={top}
              background={background}
              text={text}
            />
          ))
        }
        {
          block.map((item, index) => (
            <Block
              left={item.left}
              top={item.top}
              background={item.background}
              text={item.text}
              unit={item.unit}
            />
          ))
        }
        {
          valve.map(({top, left,text}, index) => (
            <Valve
              left={left}
              top={top}
              text={text}
            />
          ))
        }
      </div>
    );
  }
}
