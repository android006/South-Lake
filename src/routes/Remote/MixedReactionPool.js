import React, {Component} from 'react';
import {connect} from 'dva';
import {Row, Col, Icon} from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import request from "../../components/Request/request";
import Dot from './component/Dot'
import Block from './component/Block'
import styles from './mixedReactionPool.less'

export default class MixedReactionPool extends Component {
  state = {
    dot: [  //圆点的定位及颜色
      {name:'01_Pump010.State',text:'1',top: '29%', left: '31%'},
      {name:'01_Pump009.State',text:'2',top: '29%', left: '44%'},
      {name:'01_Pump008.State',text:'3',top: '29%', left: '57%'},
      {name:'01_Pump007.State',text:'4',top: '29%',left: '70%'},
      {name:'01_Pump021.State',text:'5',top: '71%',left: '75%'},
      {name:'01_Pump019.State',text:'6',top: '71%',left: '58.5%'},
      {name:'01_Pump020.State',text:'7',top: '71%',left: '42.5%'},
      {name:'01_Pump022.State',text:'8',top: '71%',left: '26%'},
      {name:'01_Pump012.State',text:'9',top: '48.5%',left: '24.5%'},
      {name:'01_Pump011.State',text:'10',top: '48.5%',left: '76.5%'},
      {name:'01_Pump015.State',text:'11',top: '43.5%',left: '34.5%'},
      {name:'01_Pump016.State',text:'12',top: '53%',left: '34.5%'},
      {name:'01_Pump012.State',text:'13',top: '43.5%',left: '66.8%'},
      {name:'01_Pump014.State',text:'14',top: '53%',left: '66.8%'},
      {name:'01_Pump018.State',text:'15',top: '48.5%',left: '44.5%'},
      {name:'01_Pump017.State',text:'16',top: '48.5%',left: '57%'},
    ],
    block: [ //显示框的定位及颜色
      {name:'01_AIW288.1_V',text:'1',top: '24%', left: '38.5%'},
      {name:'01_AIW288.2_V',text:'2',top: '24%', left: '64.3%'},
    ],
  }
  // componentDidMount(){
  //   let t = this;
  //   request({
  //     url: '/realTimeData/getRealTimeDataByTableCode',
  //     method:'GET',
  //     params:{
  //       tableCode: 'hhfyc'
  //     }
  //   }).then((data) => {
  //     let block = [...t.state.block];
  //     block[0].text= data.ret['01_AIW288.1_V'];
  //     block[1].text= data.ret['01_AIW288.2_V'];
  //
  //     let dot = [...t.state.dot];
  //     dot[0].text= data.ret['01_Pump010.State'];
  //     dot[1].text= data.ret['01_Pump009.State'];
  //     dot[2].text= data.ret['01_Pump008.State'];
  //     dot[3].text= data.ret['01_Pump007.State'];
  //     dot[4].text= data.ret['01_Pump021.State'];
  //     dot[5].text= data.ret['01_Pump019.State'];
  //     dot[6].text= data.ret['01_Pump020.State'];
  //     dot[7].text= data.ret['01_Pump022.State'];
  //     dot[8].text= data.ret['01_Pump012.State'];
  //     dot[9].text= data.ret['01_Pump011.State'];
  //     dot[10].text= data.ret['01_Pump015.State'];
  //     dot[11].text= data.ret['01_Pump016.State'];
  //     dot[12].text= data.ret['01_Pump012.State'];
  //     dot[13].text= data.ret['01_Pump014.State'];
  //     dot[14].text= data.ret['01_Pump018.State'];
  //     dot[15].text= data.ret['01_Pump017.State'];
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
          dot.map(({top, left, background,text}, index) => (
            <Dot
              left={left}
              top={top}
              background={background}
              text={text}
            />
          ))
        }
        {
          block.map(({top, left, background,text}, index) => (
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
