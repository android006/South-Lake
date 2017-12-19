import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon} from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import request from "../../components/Request/request";
import Dot from './component/Dot'
import Block from './component/Block'
import Valve from './component/valveTop'
import styles from  './pumpRoom.less'
export default class PumpRoom extends Component {
  state = {
    dot: [  //圆点的定位及颜色
      {name:'02_Pump001.State',text:'1',top: '42.2%', left: '23.3%'},
      {name:'02_Pump002.State',text:'13',top: '40.6%', left: '44%'},
      {name:'02_Pump003.State',text:'2',top: '49.2%', left: '23.3%'},
      {name:'02_Pump004.State',text:'14',top: '47.6%', left: '44%'},
      {name:'02_Pump005.State',text:'3',top: '56.2%', left: '23.3%'},
      {name:'02_Pump006.State',text:'15',top: '54.6%', left: '44%'},
      {name:'02_Pump007.State',text:'4',top: '63.2%', left: '23.3%'},
      {name:'02_Pump008.State',text:'16',top: '61.7%', left: '44%'},
      {name:'02_Pump009.State',text:'5',top: '70.2%', left: '23.3%'},
      {name:'02_Pump010.State',text:'17',top: '69%', left: '44%'},
      {name:'02_Pump011.State',text:'6',top: '77.2%', left: '23.3%'},
      {name:'02_Pump012.State',text:'18',top: '75.5%', left: '44%'},
      {name:'02_Pump013.State',text:'7',top: '40.6%', left: '33.5%'},
      {name:'02_Pump014.State',text:'8',top: '47.6%', left: '33.5%'},
      {name:'02_Pump015.State',text:'9',top: '54.2%', left: '33.5%'},
      {name:'02_Pump016.State',text:'10',top: '61.6%', left: '33.5%'},
      {name:'02_Pump017.State',text:'11',top: '69%', left: '33.5%'},
      {name:'02_Pump018.State',text:'12',top: '76%', left: '33.5%'},
      {name:'02_Pump019.State',text:'19',top: '22.5%', left:'73%'},
      {name:'02_Pump020.State',text:'20',top: '22.5%', left: '78%'},
    ],
    block: [ //显示框的定位及颜色
      {name:'',text:'1',top: '44%', left: '19%'},
      {name:'',text:'2',top: '51%', left: '19%',},
      {name:'',text:'3',top: '53.7%', left: '19%',background: '#bfbfbd'},
      {name:'',text:'4',top: '56.2%', left: '19%',},
      {name:'',text:'5',top: '58.7%', left: '19%',},
      {name:'',text:'6',top: '65%', left: '19%',},
      {name:'',text:'7',top: '71.7%', left: '19%',},
      {name:'',text:'8',top: '74.5%', left: '19%',background: '#bfbfbd'},
      {name:'',text:'9',top: '77%', left: '19%',},
      {name:'',text:'10',top: '79.5%', left: '19%',},
      {name:'',text:'11',top:'85.5%', left:'27%',},
      {name:'',text:'12',top: '41.5%', left: '37%',},
      {name:'',text:'13',top: '48%', left: '37%',},
      {name:'',text:'14',top: '55%', left: '37%',},
      {name:'',text:'15',top: '62.2%', left: '37%',},
      {name:'',text:'16',top: '70%', left: '37%',},
      {name:'',text:'17',top: '76.2%', left: '37%',},
      {name:'',text:'18',top: '50%', left:'68%',},
      {name:'',text:'19',top: '56%', left:'68%',},
      {name:'',text:'20',top: '50%', left:'81.2%',},
      {name:'',text:'21',top: '56%', left:'81.2%',},
    ],
    valve: [
      {name:'02_MotorValve001.State',top:'44.8%', left: '16.5%'},
      {name:'02_MotorValve002.State',top:'51.8%', left: '16.5%'},
      {name:'02_MotorValve003.State',top:'58.5%', left: '16.5%'},
      {name:'02_MotorValve004.State',top: '65.3%', left: '16.5%'},
      {name:'02_MotorValve005.State',top:'72%', left: '16.5%'},
      {name:'02_MotorValve006.State',top:'79%', left: '16.5%'},
    ]
  };
  // componentDidMount(){
  //   let t = this;
  //   request({
  //     url: '/realTimeData/getRealTimeDataByTableCode',
  //     method:'GET',
  //     params:{
  //       tableCode: 'ssbf'
  //     }
  //   }).then((data) => {
  //     let block = [...t.state.block];
  //     block[0].text= data.ret['02_Pump001.State'];
  //     block[1].text= data.ret['02_Pump002.State'];
  //     block[2].text= data.ret['02_Pump003.State'];
  //     block[3].text= data.ret['02_Pump004.State'];
  //     block[4].text= data.ret['02_Pump005.State'];
  //     block[5].text= data.ret['02_Pump006.State'];
  //     block[6].text= data.ret['02_Pump007.State'];
  //     block[7].text= data.ret['02_Pump008.State'];
  //     block[8].text= data.ret['02_Pump009.State'];
  //     block[9].text= data.ret['02_Pump010.State'];
  //     block[10].text= data.ret['02_Pump011.State'];
  //     block[11].text= data.ret['02_Pump012.State'];
  //     block[12].text= data.ret['02_Pump013.State'];
  //     block[13].text= data.ret['02_Pump014.State'];
  //     block[14].text= data.ret['02_Pump015.State'];
  //     block[15].text= data.ret['02_Pump016.State'];
  //     block[16].text= data.ret['02_Pump017.State'];
  //     block[17].text= data.ret['02_Pump018.State'];
  //     block[18].text= data.ret['02_Pump019.State'];
  //     block[19].text= data.ret['02_Pump020.State'];
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
