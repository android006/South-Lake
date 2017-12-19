import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon} from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import request from "../../components/Request/request";
import Dot from './component/Dot'
import Block from './component/Block'
import styles from  './fineGrille.less'
export default class FineGrille extends Component {
  state = {
    dot:[  //圆点的定位及颜色
      {name:'01_MotorValve023.State',text:'1',top: '40.5%',left: '25%',background: '#a7adab'},
      {name:'01_MotorValve024.State',text:'2',top: '60.5%',left: '25%',background: '#a7adab'},
      {name:'01_MotorValve025.State',text:'3',top: '40.5%',left: '73.5%',background: '#a7adab'},
      {name:'01_MotorValve026.State',text:'4',top: '60.5%',left: '73.5%',background: '#a7adab'},
      {name:'01_MotorValve027.State',text:'5',top: '43.8%',left: '78.5%',background: '#a7adab'},
      {name:'01_MotorValve028.State',text:'6',top: '58%',left: '78.5%',background: '#a7adab'},
      {name:'01_Pump043.State',text:'7',top: '22.5%',left: '60%'},
      {name:'01_Pump042.State',text:'8',top: '38.5%',left: '55.5%'},
      {name:'01_Pump041.State',text:'9',top: '58%',left: '55.5%'},
    ],
    block:[ //显示框的定位及颜色
      {name:'01_AIW288.5_V',text:'1',top: '33%',left: '11.5%'},
      {name:'01_AIW288.6_V',text:'3',top: '50%',left: '11%'},
      {name:'',text:'2',top: '36%',left: '11.5%'},
      {name:'',text:'4',top: '53%',left: '11%'},
      {name:'01_AIW320.2_V',text:'5',top: '74%',left: '24.3%'},
      {name:'01_AIW320.3_V',text:'6',top: '74%',left: '28.3%'},
      {name:'01_AIW320.4_V',text:'7',top: '74%',left: '32.3%'},
      {name:'01_AIW320.5_V',text:'8',top: '74%',left: '36.3%'},
      {name:'01_AIW320.6_V',text:'9',top: '74%',left: '40.3%'},
      {name:'01_AIW320.7_V',text:'10',top: '74%',left: '45%'},
      {name:'01_AIW320.1_V',text:'11',top: '74%',left: '54%'},
      {name:'01_AIW320.0_V',text:'12',top: '30%',left: '53.5%'},
    ],
  }
  // componentDidMount(){
  //   let t = this;
  //   request({
  //     url: '/realTimeData/getRealTimeDataByTableCode',
  //     method:'GET',
  //     params:{
  //       tableCode: 'jxsg'
  //     }
  //   }).then((data) => {
  //     let block = [...t.state.block];
  //     block[0].text= data.ret['01_AIW288.5_V'];
  //     block[1].text= data.ret['01_AIW288.6_V'];
  //     block[2].text= data.ret['01_AIW320.2_V'];
  //     block[3].text= data.ret['01_AIW320.3_V'];
  //     block[4].text= data.ret['01_AIW320.4_V'];
  //     block[5].text= data.ret['01_AIW320.5_V'];
  //     block[6].text= data.ret['01_AIW320.6_V'];
  //     block[7].text= data.ret['01_AIW320.7_V'];
  //     block[8].text= data.ret['01_AIW320.1_V'];
  //     block[9].text= data.ret['01_AIW320.0_V'];
  //
  //     let dot = [...t.state.dot];
  //     dot[0].text= data.ret['01_MotorValve023.State'];
  //     dot[1].text= data.ret['01_MotorValve024.State'];
  //     dot[2].text= data.ret['01_MotorValve025.State'];
  //     dot[3].text= data.ret['01_MotorValve026.State'];
  //     dot[4].text= data.ret['01_MotorValve027.State'];
  //     dot[5].text= data.ret['01_MotorValve028.State'];
  //     dot[6].text= data.ret['01_Pump043.State'];
  //     dot[7].text= data.ret['01_Pump042.State'];
  //     dot[8].text= data.ret['01_Pump041.State'];
  //     t.setState({
  //       dot,
  //       block,
  //     })
  //   })
  // }
  render() {
    const {dot, block} = this.state;
    return (
      <div className={styles.bg}>
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
