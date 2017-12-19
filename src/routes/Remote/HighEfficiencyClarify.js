import React, {Component} from 'react';
import {connect} from 'dva';
import {Row, Col, Icon} from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import request from "../../components/Request/request";
import styles from './highEfficiencyClarify.less'
import Dot from './component/Dot'
import Block from './component/Block'
import Valve from './component/valveTop'

export default class HighEfficiencyClarify extends Component {
  state = {
    dot: [  //圆点的定位及颜色
      {name:'01_Pump025.State',text:'13',top: '69%', left: '28%'},
      {name:'01_Pump026.State',text:'14',top: '69%', left: '35.5%'},
      {name:'01_Pump027.State',text:'15',top: '69%', left: '69%'},
      {name:'01_Pump028.State',text:'16',top: '69%', left: '76.5%'},
      {name:'01_Pump029.State',text:'12',top: '74%', left: '84.5%'},
      {name:'01_Pump030.State',text:'11',top: '74%', left: '61%'},
      {name:'01_Pump031.State',text:'10',top: '74%', left: '43.5%'},
      {name:'01_Pump032.State',text:'9',top: '74%', left: '20%'},
      {name:'01_Pump033.State',text:'7',top: '23%', left: '82.5%'},
      {name:'01_Pump034.State',text:'8',top: '47%', left: '82.5%'},
      {name:'01_Pump035.State',text:'5',top: '23%', left: '62.3%'},
      {name:'01_Pump036.State',text:'6',top: '47%', left: '62.3%'},
      {name:'01_Pump037.State',text:'3',top: '23%', left: '41.5%'},
      {name:'01_Pump038.State',text:'4',top: '47%', left: '41.5%'},
      {name:'01_Pump039.State',text:'1',top: '23%', left: '21.5%'},
      {name:'01_Pump040.State',text:'2',top: '47%', left: '21.5%'},
    ],
    block: [ //显示框的定位及颜色
      {name:'01_AIW288.3_V',text:'1',top: '81%', left: '30%'},
      {name:'01_AIW288.5_V',text:'2',top: '88.5%', left: '28%'},
      {name:'01_AIW304.3_V',text:'3',top: '86.5%', left: '35%'},
      {name:'01_AIW288.4_V',text:'4',top: '81%', left: '72%'},
      {name:'01_AIW288.6_V',text:'5',top: '88.5%', left: '69%'},
      {name:'01_AIW304.4_V',text:'6',top: '86.5%', left: '76%'},
    ],
    valve: [
      {name:'04_MotorValve007.State',top:'38.1%', left: '76%'},
      {name:'04_MotorValve008.State',top: '62.2%', left: '76%'},
      {name:'04_MotorValve009.State',top:'38.1%', left: '70%'},
      {name:'04_MotorValve010.State',top: '62.2%', left: '70%'},
      {name:'04_MotorValve011.State',top:'38.1%', left: '34.9%'},
      {name:'04_MotorValve012.State',top: '62.2%', left: '34.9%'},
      {name:'04_MotorValve013.State',top:'38.1%', left: '29.5%'},
      {name:'04_MotorValve014.State',top: '62.2%', left: '29.62%'},
      {name:'04_MotorValve015.State',top:'22.2%', left: '76%'},
      {name:'04_MotorValve016.State',top:'46.5%', left: '76%'},
      {name:'04_MotorValve017.State',top:'22.2%', left: '70%'},
      {name:'04_MotorValve018.State',top:'46.5%', left: '70%'},
      {name:'04_MotorValve019.State',top:'22.2%', left: '34.9%'},
      {name:'04_MotorValve020.State',top:'46.5%', left: '34.9%'},
      {name:'04_MotorValve021.State',top:'22.2%', left: '29.5%'},
      {name:'04_MotorValve022.State',top:'46.5%', left: '29.5%'},
    ]
  };
  // componentDidMount(){
  //   let t = this;
  //   request({
  //     url: '/realTimeData/getRealTimeDataByTableCode',
  //     method:'GET',
  //     params:{
  //       tableCode: 'gxcqc'
  //     }
  //   }).then((data) => {
  //     let block = [...t.state.block];
  //     block[0].text= data.ret['01_AIW288.3_V'];
  //     block[1].text= data.ret['01_AIW288.5_V'];
  //     block[2].text= data.ret['01_AIW304.3_V'];
  //     block[3].text= data.ret['01_AIW288.4_V'];
  //     block[4].text= data.ret['01_AIW288.6_V'];
  //     block[5].text= data.ret['01_AIW304.4_V'];
  //
  //     let dot = [...t.state.dot];
  //     dot[0].text= data.ret['01_Pump025.State'];
  //     dot[1].text= data.ret['01_Pump026.State'];
  //     dot[2].text= data.ret['01_Pump027.State'];
  //     dot[3].text= data.ret['01_Pump028.State'];
  //     dot[4].text= data.ret['01_Pump029.State'];
  //     dot[5].text= data.ret['01_Pump030.State'];
  //     dot[6].text= data.ret['01_Pump031.State'];
  //     dot[7].text= data.ret['01_Pump032.State'];
  //     dot[8].text= data.ret['01_Pump033.State'];
  //     dot[9].text= data.ret['01_Pump034.State'];
  //     dot[10].text= data.ret['01_Pump035.State'];
  //     dot[11].text= data.ret['01_Pump036.State'];
  //     dot[12].text= data.ret['01_Pump037.State'];
  //     dot[13].text= data.ret['01_Pump038.State'];
  //     dot[14].text= data.ret['01_Pump039.State'];
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
              text={text}
              left={left}
              top={top}
            />
          ))
        }
      </div>
    );
  }
}
