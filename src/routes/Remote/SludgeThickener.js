import React, {Component} from 'react';
import {connect} from 'dva';
import {Row, Col, Icon} from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import request from "../../components/Request/request";
import Dot from './component/Dot'
import styles from './sludgeThickener.less';

export default class SludgeThickener extends Component {
  state = {
    dot: [
      {name:'03_Pump008.State',top: '50.7%',left: '31.65%'},
      {name:'03_Pump009.State',top: '50.5%',left: '68%'}
    ]
  }
  // componentDidMount(){
  //   let t = this;
  //   request({
  //     url: '/realTimeData/getRealTimeDataByTableCode',
  //     method:'GET',
  //     params:{
  //       tableCode: 'wnnsc'
  //     }
  //   }).then((data) => {
  //     let dot = [...t.state.dot];
  //     dot[0].text= data.ret['03_Pump008.State'];
  //     dot[1].text= data.ret['03_Pump009.State'];
  //     t.setState({
  //       dot,
  //     })
  //   })
  // }
  render() {
    const {dot} = this.state;
    return (
      <div className={styles.bg}>
        {
          dot.map(({top, left, background}, index) => (
            <Dot
              left={left}
              top={top}
              background={background}
            />
          ))
        }
      </div>
    );
  }
}
