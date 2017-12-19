import React, {Component} from 'react';
import {connect} from 'dva';
import {Row, Col, Icon} from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import request from "../../components/Request/request";
import Dot from './component/Dot'
import Block from './component/Block'
import Valve from './component/valveTop'
import styles from './drugstore.less'

export default class Drugstore extends Component {
  state = {
    dot: [  //圆点的定位及颜色
      {name:'01_Pump044.State',top: '33.5%', left: '20%'},
      {name:'01_Pump045.State',top: '49%', left: '20%'},
      {name:'01_Pump046.State',top: '64%', left: '20%'},
      {name:'01_Pump047.State',top: '78%', left: '20%'},
      {name:'01_Pump048.State',top: '48%', left: '53.5%'},
      {name:'01_Pump049.State',top: '61%', left: '53.5%'},
      {name:'01_Pump050.State',top: '33.5%', left: '38%'},
      {name:'01_Pump051.State',top: '46%', left: '38%'},
      {name:'01_Pump052.State',top: '65%', left: '38%'},
      {name:'01_Pump053.State',top: '78.5%', left: '38%'},
      {name:'01_Pump054.State',top: '40.5%', left: '72%'},
      {name:'01_Pump055.State',top: '68%', left: '72%'},
      {name:'01_Pump056.State',top: '28%', left: '8.6%'},
      {name:'01_Pump057.State',top: '38%', left: '8.6%'},
      {name:'01_Pump058.State',top: '48.5%', left: '8.6%'},
      {name:'01_Pump059.State',top: '58.5%', left: '8.6%'},
      {name:'01_Pump060.State',top: '68.5%', left: '8.6%'},
      {name:'01_Pump061.State',top: '78.5%', left: '8.6%'},
      {name:'01_Pump062.State',top: '31%', left: '89%'},
      {name:'01_Pump063.State',top: '38.2%', left: '89%'},
      {name:'01_Pump064.State',top: '45.5%', left: '89%'},
    ],
    block: [ //显示框的定位及颜色
      {name:'01_AO007',top: '43%', left: '93%'},
      {name:'01_AO009',top: '22.5%', left: '10%', background: '#bfbfbd'},
      {name:'01_AO010',top: '32.5%', left: '10%', background: '#bfbfbd'},
      {name:'01_AO011',top: '43%', left: '10%', background: '#bfbfbd'},
      {name:'01_AO012',top: '53.5%', left: '10%', background: '#bfbfbd'},
      {name:'01_AO013',top: '63.5%', left: '10%', background: '#bfbfbd'},
      {name:'01_AO014',top: '73.5%', left: '10%', background: '#bfbfbd'},
      {name:'01_AO015',top: '29%', left: '93%'},
      {name:'01_AO016',top: '36%', left: '93%'},
      {name:'01_AIW352.0_V',top: '66%', left: '10%'},
      {name:'01_AIW352.1_V',top: '76%', left: '10%'},
      {name:'01_AIW336.4_V',top: '25%', left: '10%'},
      {name:'01_AIW336.5_V',top: '35%', left: '10%'},
      {name:'01_AIW336.6_V',top: '45.5%', left: '10%'},
      {name:'01_AIW336.7_V',top: '56%', left: '10%'},
      {name:'01_AIW368.5_L',top: '15%', left: '45.5%'},
      {name:'01_AIW368.6_L',top: '17.6%', left: '45.5%'},
      {name:'01_AIW384.1_V',top: '20.3%', left: '45.5%'},
      {name:'01_AIW384.2_V',top: '23%', left: '45.5%'},
      {name:'01_AIW368.7_V',top: '15%', left: '53%'},
      {name:'01_AIW384.0_V',top: '17.6%', left: '53%'},
      {name:'01_AIW384.3_V',top: '20.3%', left: '53%'},
      {name:'01_AIW384.4_V',top: '23%', left: '53%'},
      {name:'01_AIW384.5_V',top: '15%', left: '60%'},
      {name:'01_AIW384.6_V',top: '17.6%', left: '60%'},
      {name:'01_AIW384.7_V',top: '20.3%', left: '60%'},
      {name:'01_AIW304.5_V',top: '23%', left: '60%'},
      {name:'01_AIW352.2_V',top: '29%', left: '96.2%', background: '#bfbfbd'},
      {name:'01_AIW352.3_V',top: '36%', left: '96.2%', background: '#bfbfbd'},
      {name:'01_AIW352.4_V',top: '43%', left: '96.2%', background: '#bfbfbd'},
      {name:'',top: '87.5%', left: '8%', background: '#bfbfbd'},
      {name:'',top: '91.5%', left: '24%'},
      {name:'',top: '91.5%', left: '28%', background: '#bfbfbd'}
    ],
    valve: [
      {name:'01_MotorValve031.State',top: '27%', left: '14.5%'},
      {name:'01_MotorValve032.State',top: '42.2%', left: '14.5%'},
      {name:'01_MotorValve033.State',top: '60%', left: '14.5%'},
      {name:'01_MotorValve034.State',top: '74%', left: '14.5%'},
      {name:'01_MotorValve035.State',top: '46%', left: '26.7%'},
      {name:'01_MotorValve036.State',top: '30.1%', left: '26.7%'},
      {name:'01_MotorValve037.State',top: '76%', left: '26.7%'},
      {name:'01_MotorValve038.State',top: '63%', left: '26.7%'},
      {name:'01_MotorValve039.State',top: '41.6%', left: '44%'},
      {name:'01_MotorValve040.State',top: '28.2%', left: '44%'},
      {name:'01_MotorValve041.State',top: '61.1%', left: '44%'},
      {name:'01_MotorValve042.State',top: '75.2%', left: '44%'},
      {name:'01_MotorValve043.State',top: '43.3%', left: '49.2%'},
      {name:'01_MotorValve044.State',top: '57.5%', left: '49.2%'},
      {name:'01_MotorValve045.State',top: '28.5%', left: '60%'},
      {name:'01_MotorValve046.State',top: '39.7%', left: '62.5%'},
      {name:'01_MotorValve047.State',top: '23.6%', left: '26.7%'},
      {name:'01_MotorValve048.State',top: '38.8%', left: '26.7%'},
      {name:'01_MotorValve049.State',top: '24%', left: '32.5%'},
      {name:'01_MotorValve050.State',top: '39%', left: '32.5%'},
      {name:'01_MotorValve051.State',top: '55.2%', left: '26.7%'},
      {name:'01_MotorValve052.State',top: '70%', left: '26.7%'},
      {name:'01_MotorValve053.State',top: '55.2%', left: '32.5%'},
      {name:'01_MotorValve054.State',top: '70.2%', left: '32.5%'},
      {name:'01_MotorValve055.State',top: '39.7%', left: '59%'},
      {name:'01_MotorValve056.State',top: '72.3%', left: '60%'},
      {name:'01_MotorValve057.State',top: '53.8%', left: '62.5%'},
      {name:'01_MotorValve058.State',top: '53.8%', left: '59%'},

    ]
  };
  // componentDidMount(){
  //   let t = this;
  //   request({
  //     url: '/realTimeData/getRealTimeDataByTableCode',
  //     method:'GET',
  //     params:{
  //       tableCode: 'jyf'
  //     }
  //   }).then((data) => {
  //     let block = [...t.state.block];
  //     block[0].text= data.ret['01_AO007'];
  //     block[1].text= data.ret['01_AO009'];
  //     block[2].text= data.ret['01_AO010'];
  //     block[3].text= data.ret['01_AO011'];
  //     block[4].text= data.ret['01_AO012'];
  //     block[5].text= data.ret['01_AO013'];
  //     block[6].text= data.ret['01_AO014'];
  //     block[7].text= data.ret['01_AO015'];
  //     block[8].text= data.ret['01_AO016'];
  //     block[9].text= data.ret['01_AIW352.0_V'];
  //     block[10].text= data.ret['01_AIW352.1_V'];
  //     block[11].text= data.ret['01_AIW336.4_V'];
  //     block[12].text= data.ret['01_AIW336.5_V'];
  //     block[13].text= data.ret['01_AIW336.6_V'];
  //     block[14].text= data.ret['01_AIW336.7_V'];
  //     block[15].text= data.ret['01_AIW368.5_L'];
  //     block[16].text= data.ret['01_AIW368.6_L'];
  //     block[17].text= data.ret['01_AIW384.1_V'];
  //     block[18].text= data.ret['01_AIW384.2_V'];
  //     block[19].text= data.ret['01_AIW368.7_V'];
  //     block[20].text= data.ret['01_AIW384.0_V'];
  //     block[21].text= data.ret['01_AIW384.3_V'];
  //     block[22].text= data.ret['01_AIW384.4_V'];
  //     block[23].text= data.ret['01_AIW384.5_V'];
  //     block[24].text= data.ret['01_AIW384.6_V'];
  //     block[25].text= data.ret['01_AIW384.7_V'];
  //     block[26].text= data.ret['01_AIW304.5_V'];
  //     block[27].text= data.ret['01_AIW352.2_V'];
  //     block[28].text= data.ret['01_AIW352.3_V'];
  //     block[29].text= data.ret['01_AIW352.4_V'];
  //
  //     let dot = [...t.state.dot];
  //     dot[0].text= data.ret['01_Pump044.State'];
  //     dot[1].text= data.ret['01_Pump045.State'];
  //     dot[2].text= data.ret['01_Pump046.State'];
  //     dot[3].text= data.ret['01_Pump047.State'];
  //     dot[4].text= data.ret['01_Pump048.State'];
  //     dot[5].text= data.ret['01_Pump049.State'];
  //     dot[6].text= data.ret['01_Pump050.State'];
  //     dot[7].text= data.ret['01_Pump051.State'];
  //     dot[8].text= data.ret['01_Pump052.State'];
  //     dot[9].text= data.ret['01_Pump053.State'];
  //     dot[10].text= data.ret['01_Pump054.State'];
  //     dot[11].text= data.ret['01_Pump055.State'];
  //     dot[12].text= data.ret['01_Pump056.State'];
  //     dot[13].text= data.ret['01_Pump057.State'];
  //     dot[14].text= data.ret['01_Pump058.State'];
  //     dot[15].text= data.ret['01_Pump059.State'];
  //     dot[16].text= data.ret['01_Pump060.State'];
  //     dot[17].text= data.ret['01_Pump061.State'];
  //     dot[18].text= data.ret['01_Pump062.State'];
  //     dot[19].text= data.ret['01_Pump063.State'];
  //     dot[20].text= data.ret['01_Pump064.State'];
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
          dot.map(({top, left, background,text}, index) => (
            <Dot
              text={index}
              left={left}
              top={top}
              background={background}
            />
          ))
        }
        {
          block.map(({top, left, background,text}, index) => (
            <Block
              text={index}
              left={left}
              top={top}
              background={background}
            />
          ))
        }
        {
          valve.map(({top, left,text}, index) => (
            <Valve
              left={left}
              top={top}
            />
          ))
        }
      </div>
    );
  }
}
