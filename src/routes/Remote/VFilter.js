import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon} from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import request from "../../components/Request/request";
import Dot from './component/Dot'
import Block from './component/Block'
import Valve from './component/valveTop'
import styles from  './vFilter.less'
export default class VFilter extends Component {
  state = {
    dot: [  //圆点的定位及颜色
      {name:'01_Pump001.State',text:'1',top: '22.5%', left: '69%'},
      {name:'01_Pump002.State',text:'2',top: '28.5%', left: '69%'},
      {name:'01_Pump003.State',text:'3',top: '35%', left: '69%'},
      {name:'01_Pump004.State',text:'4',top: '55%', left: '70%'},
      {name:'01_Pump005.State',text:'5',top: '63%', left: '70%'},
      {name:'01_Pump006.State',text:'6',top: '70.8%', left: '70%'},
    ],
    block: [ //显示框的定位及颜色
      {name:'01_AO001',text:'1',top: '20%', left: '78%',background: '#d2d7dd'},
      {name:'01_AO002',text:'3',top: '26.5%', left: '78%',background: '#d2d7dd'},
      {name:'01_AO003',text:'5',top: '32.5%', left: '78%',background: '#d2d7dd'},
      {name:'01_AO004',text:'9',top: '55%', left: '78%',background: '#d2d7dd'},
      {name:'01_AO005',text:'11',top: '63%', left: '78%',background: '#d2d7dd'},
      {name:'01_AO006',text:'13',top: '70%', left: '78%',background: '#d2d7dd'},
      {name:'01_AIW272.3_V',text:'2',top: '23%', left: '78%',},
      {name:'01_AIW272.4_V',text:'4',top: '29.5%', left: '78%',},
      {name:'01_AIW272.5_V',text:'6',top: '35.5%', left: '78%',},
      {name:'01_AIW304.2_V',text:'7',top: '43.5%', left: '77%',},
      {name:'01_AIW272.2_V',text:'8',top: '49%', left: '77%',},
      {name:'01_AIW272.6_V',text:'10',top: '58%', left: '78%',},
      {name:'01_AIW272.7_V',text:'12',top: '66%', left: '78%',},
      {name:'01_AIW288.0_V',text:'14',top: '73%', left: '78%',},
      {name:'01_AIW304.0_V',text:'15',top: '41.8%', left: '65.5%',},
      {name:'01_AIW304.1_V',text:'16',top: '46%', left: '65.5%',},
      {name:'01_AIW336.1_V',text:'17',top: '58%', left: '86.5%',},
      {name:'01_AIW336.2_V',text:'18',top: '61.5%', left: '86.5%',},
      {name:'01_AIW336.3_V',text:'19',top: '65%', left: '86.5%',}
    ],
    valve: [
      {name:'01_MotorValve001.State',top: '24.2%', left: '66%'},
      {name:'01_MotorValve002.State',top:'30.7%', left: '66%'},
      {name:'01_MotorValve003.State',top:'37.4%', left: '66%'},
      {name:'01_MotorValve004.State',top: '57%', left: '66%'},
      {name:'01_MotorValve005.State',top:'64.7%', left: '66%'},
      {name:'01_MotorValve006.State',top:'72.8%', left: '66%'},
    ]
  };
  // componentDidMount(){
  //   let t = this;
  //   request({
  //     url: '/realTimeData/getRealTimeDataByTableCode',
  //     method:'GET',
  //     params:{
  //       tableCode: 'vxlc'
  //     }
  //   }).then((data) => {
  //     let block = [...t.state.block];
  //     block[0].text= data.ret['01_AO001'];
  //     block[1].text= data.ret['01_AO002'];
  //     block[2].text= data.ret['01_AO003'];
  //     block[3].text= data.ret['01_AO004'];
  //     block[4].text= data.ret['01_AO005'];
  //     block[5].text= data.ret['01_AO006'];
  //     block[6].text= data.ret['01_AIW272.3_V'];
  //     block[7].text= data.ret['01_AIW272.4_V'];
  //     block[8].text= data.ret['01_AIW272.5_V'];
  //     block[9].text= data.ret['01_AIW304.2_V'];
  //     block[10].text= data.ret['01_AIW272.2_V'];
  //     block[11].text= data.ret['01_AIW272.6_V'];
  //     block[12].text= data.ret['01_AIW272.7_V'];
  //     block[13].text= data.ret['01_AIW288.0_V'];
  //     block[14].text= data.ret['01_AIW304.0_V'];
  //     block[15].text= data.ret['01_AIW304.1_V'];
  //     block[16].text= data.ret['01_AIW336.1_V'];
  //     block[17].text= data.ret['01_AIW336.2_V'];
  //     block[18].text= data.ret['01_AIW336.3_V'];
  //
  //     let dot = [...t.state.dot];
  //     dot[0].text= data.ret['01_Pump001.State'];
  //     dot[1].text= data.ret['01_Pump002.State'];
  //     dot[2].text= data.ret['01_Pump003.State'];
  //     dot[3].text= data.ret['01_Pump004.State'];
  //     dot[4].text= data.ret['01_Pump005.State'];
  //     dot[5].text= data.ret['01_Pump006.State'];
  //     t.setState({
  //       dot,
  //       block,
  //     })
  //   })
  // }
  render() {
    const {dot, block, valve} = this.state;
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
