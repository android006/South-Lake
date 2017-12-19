import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon,Table ,Pagination} from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import Filtrate from "../../components/Filtrate/filtrate";
import styles from  './combinedPoolReport.less'
export default class WaterTreatmentReport extends Component {
  state = {
    tableLoading: false,
    tableData:[],
    id: 0,
  }

  onSearch(value){
    console.log("onSearch:",value)
  }
  pageChange(){
    console.log("pageChange:",'pageChange')
  }
  render() {
    let t= this;
    // table 选中事件
    const columns = [
      {
      title: '时间',
      dataIndex: 'name',
      width: 100,
      fixed: 'left',
      key: 'name',
    }, {
      title: '反冲洗气总管流量2',
      width: 150,
      dataIndex: 'age',
      key: 'age',
    },{
      title: '3#PAC溶解池液位',
      width: 150,
      dataIndex: 'age1',
      key: 'age1',
    },{
      title: '1#Na2CO3计量泵出口流量',
      width: 150,
      dataIndex: 'age11',
      key: 'age11',
    },{
      title: '4#PAC计量泵出口流量',
      width: 150,
      dataIndex: 'address',
      key: 'address',
    },{
      title: '3#PAC计量泵出口流量',
      width: 150,
      dataIndex: 'address1',
      key: 'address1',
    },{
      title: '2#NaOH计量泵出口流量',
      width: 150,
      dataIndex: 'address2',
      key: 'address2',
    },{
      title: '1#NaOH计量泵出口流量',
      width: 150,
      dataIndex: 'address3',
      key: 'address3',
    },{
      title: '3#加药螺杆泵频率',
      width: 150,
      dataIndex: 'address4',
      key: 'address4',
    },{
      title: '进水碱度',
      width: 150,
      dataIndex: 'address5',
      key: 'address5',
    },{
      title: '进水硬度',
      width: 150,
      dataIndex: 'address6',
      key: 'address6',
    },{
      title: '进水COD',
      width: 150,
      dataIndex: 'address7',
      key: 'address7',
    },{
      title: '2#细格栅液位差',
      width: 150,
      dataIndex: 'address8',
      key: 'address8',
    },{
      title: '1#细格栅液位差',
      width: 150,
      dataIndex: 'address9',
      key: 'address9',
    },{
      title: '4#Na2CO3溶解池液位',
      width: 150,
      dataIndex: 'address10',
      key: 'address10',
    },{
      title: '2#加药螺杆泵频率',
      width: 150,
      dataIndex: 'address11',
      key: 'address11',
    },{
      title: '污泥泵出口总管压力2',
      width: 150,
      dataIndex: 'address12',
      key: 'address12',
    },{
      title: '1#加药螺杆泵频率',
      width: 150,
      dataIndex: 'address13',
      key: 'address13',
    },{
      title: '6#加药计量泵频率',
      width: 150,
      dataIndex: 'address14',
      key: 'address14',
    },{
      title: '5#加药计量泵频率',
      width: 150,
      dataIndex: 'address15',
      key: 'address15',
    },{
      title: '4#加药计量泵频率',
      width: 150,
      dataIndex: 'address16',
      key: 'address16',
    },{
      title: '3#加药计量泵频率',
      width: 150,
      dataIndex: 'address17',
      key: 'address17',
    },{
      title: '2#加药计量泵频率',
      width: 150,
      dataIndex: 'address18',
      key: 'address18',
    },{
      title: '污泥泵出口总管压力1',
      width: 150,
      dataIndex: 'address19',
      key: 'address19',
    },{
      title: '压缩机出口总管压力',
      width: 150,
      dataIndex: 'address20',
      key: 'address20',
    },{
      title: '反冲洗气总管压力2',
      width: 150,
      dataIndex: 'address22',
      key: 'address22',
    },{
      title: '反冲洗水总管压力1',
      width: 150,
      dataIndex: 'address21',
      key: 'address21',
    },{
      title: '污泥泵出口总管流量2',
      width: 150,
      dataIndex: 'address23',
      key: 'address23',
    },{
      title: '2#NaOH溶解池液位',
      width: 150,
      dataIndex: 'address24',
      key: 'address24',
    },{
      title: '1#加药计量泵频率',
      width: 150,
      dataIndex: 'address25',
      key: 'address25',
    },{
      title: '污泥泵出口总管流量1',
      width: 150,
      dataIndex: 'address26',
      key: 'address26',
    },{
      title: '3#Na2CO3溶解池液位',
      width: 150,
      dataIndex: 'address27',
      key: 'address27',
    },{
      title: '1#NaOH溶解池液位',
      width: 150,
      dataIndex: 'address28',
      key: 'address28',
    },{
      title: '2#PAC溶解池液位',
      width: 150,
      dataIndex: 'address29',
      key: 'address29',
    },{
      title: '1#PAC溶解池液位',
      width: 150,
      dataIndex: 'address30',
      key: 'address30',
    },{
      title: '2#PAM计量泵出口流量',
      width: 150,
      dataIndex: 'address31',
      key: 'address31',
    },{
      title: '1#PAM计量泵出口流量',
      width: 150,
      dataIndex: 'address32',
      key: 'address32',
    },{
      title: '2#Na2CO3计量泵出口流量',
      width: 150,
      dataIndex: 'address33',
      key: 'address33',
    },{
      title: '2#污泥池液位',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '1#污泥池液位',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '2#混合池液位',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '1#混合池液位',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '3#反冲洗风机频率',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '2#反冲洗风机频率',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '滤池出水碱度',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '滤池出水硬度',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '滤池出水浊度',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '进水温度',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '进水PH',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '进水电导率',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '进水浊度',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '1#反冲洗风机频率',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '3#反冲洗泵频率',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '2#反冲洗泵频率',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '1#反冲洗泵频率',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '压缩机出口流量',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '反冲洗水总管流量1',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '2#Na2CO3溶解池液位',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '1#Na2CO3溶解池液位',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '4#NaOH溶解池液位',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '3#NaOH溶解池液位',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '4#PAC溶解池液位',
      dataIndex: 'address35',
      key: 'address35',
      fixed: 'right',
      width: 150
    }];

    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];
    const items = [
      {
        type: 'select',
        label: '参数',
        placeholder: '请输入 ..',
        paramName: 'deviceType',
        options: [
          {text: '喷淋出口温度超高预警', value: ''},
          {text: '引动机手动给定频率', value: '0'},
          {text: '引风机手动切换', value: '1'},
          {text: '无料报警', value: '2'},
          {text: 'A鼓风机运行', value: '3'}
        ],
      },
      {
        type: 'rangePicker',
        label: '时间段',
        paramName: 'date',
      },
    ];
    return (
      <div>
        <Filtrate
          items={items}
          submit={t.onSearch.bind(t)}
          dropdownMatchSelectWidth={false}
        />
        <div className={styles.wpContainer}>
          <div className={styles.wpContainerHeader}>
            <Icon type="export" style={{fontSize: '24px', color: '#16b8be', marginLeft: '10px',marginRight: '4px'}}/>
          </div>
          <Table
            rowKey="id"
            bordered
            scroll={{ x: 9100, y: 850 }}
            size="middle"
            loading={t.state.tableLoading}
            dataSource={dataSource}
            pagination={false}
            columns={columns}
          />
          <Pagination
            onChange={t.pageChange.bind(t)}
            onShowSizeChange={t.pageChange.bind(t)}
            showQuickJumper
            showSizeChanger
            size={'small'}
            className={styles.wpPage}
            total={t.state.total}
          />
        </div>
      </div>
    );
  }
}
