import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon,Table ,Pagination} from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import Filtrate from "../../components/Filtrate/filtrate";
import styles from  './combinedPoolReport.less'
export default class WaterPumpHouse extends Component {
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
    const columns = [{
      title: '时间',
      dataIndex: 'name',
      width: 100,
      fixed: 'left',
      key: 'name',
    }, {
      title: '4-6#送水泵出口总管压力信号1',
      width: 150,
      dataIndex: 'age',
      key: 'age',
    },{
      title: '6#低压卧式离心泵电流反馈',
      width: 150,
      dataIndex: 'age1',
      key: 'age1',
    },{
      title: '出水PH',
      width: 150,
      dataIndex: 'age11',
      key: 'age11',
    },{
      title: '消防水泵出水干管压力1',
      width: 150,
      dataIndex: 'address',
      key: 'address',
    },{
      title: '吸水井液位输出',
      width: 150,
      dataIndex: 'address1',
      key: 'address1',
    },{
      title: '2#高压卧式离心泵频率反馈',
      width: 150,
      dataIndex: 'address2',
      key: 'address2',
    },{
      title: '4-6#送水泵出口支管压力1',
      width: 150,
      dataIndex: 'address3',
      key: 'address3',
    },{
      title: '1-3#送水泵出口支管压力3',
      width: 150,
      dataIndex: 'address4',
      key: 'address4',
    },{
      title: '1-3#送水泵出口支管压力2',
      width: 150,
      dataIndex: 'address5',
      key: 'address5',
    },{
      title: '1-3#送水泵出口支管压力1',
      width: 150,
      dataIndex: 'address6',
      key: 'address6',
    },{
      title: '4-6#送水泵出口总管压力信号2',
      width: 150,
      dataIndex: 'address7',
      key: 'address7',
    },{
      title: '超声波液位计信号',
      width: 150,
      dataIndex: 'address8',
      key: 'address8',
    },{
      title: '消防液位检测',
      width: 150,
      dataIndex: 'address9',
      key: 'address9',
    },{
      title: '5#低压卧式离心泵电流反馈',
      width: 150,
      dataIndex: 'address10',
      key: 'address10',
    },{
      title: '4#低压卧式离心泵电流反馈',
      width: 150,
      dataIndex: 'address11',
      key: 'address11',
    },{
      title: '4#低压卧式离心泵频率反馈',
      width: 150,
      dataIndex: 'address12',
      key: 'address12',
    },{
      title: '出水碱度',
      width: 150,
      dataIndex: 'address13',
      key: 'address13',
    },{
      title: '出水硬度',
      width: 150,
      dataIndex: 'address14',
      key: 'address14',
    },{
      title: '出水COD',
      width: 150,
      dataIndex: 'address15',
      key: 'address15',
    },{
      title: '出水电导',
      width: 150,
      dataIndex: 'address16',
      key: 'address16',
    },{
      title: '出水浊度',
      width: 150,
      dataIndex: 'address17',
      key: 'address17',
    },{
      title: '4-6#送水泵出水总管流量1',
      width: 150,
      dataIndex: 'address18',
      key: 'address18',
    },{
      title: '1-3#送水泵出水总管流量2',
      width: 150,
      dataIndex: 'address19',
      key: 'address19',
    },{
      title: '1-3#送水泵出水总管流量1',
      width: 150,
      dataIndex: 'address20',
      key: 'address20',
    },{
      title: '消防水泵出水干管压力2',
      width: 150,
      dataIndex: 'address22',
      key: 'address22',
    },{
      title: '4-6#送水泵出口支管压力3',
      width: 150,
      dataIndex: 'address21',
      key: 'address21',
    },{
      title: '1-3#送水泵出口总压力信号2',
      width: 150,
      dataIndex: 'address23',
      key: 'address23',
    },{
      title: '3#高压卧式离心泵电流反馈',
      width: 150,
      dataIndex: 'address24',
      key: 'address24',
    },{
      title: '4-6#送水泵出水总管流量2',
      width: 150,
      dataIndex: 'address25',
      key: 'address25',
    },{
      title: '4-6#送水泵出口支管压力2',
      width: 150,
      dataIndex: 'address26',
      key: 'address26',
    },{
      title: '1-3#送水泵出口总压力信号1',
      width: 150,
      dataIndex: 'address27',
      key: 'address27',
    },{
      title: '清水池液位检测4',
      width: 150,
      dataIndex: 'address28',
      key: 'address28',
    },{
      title: '清水池液位检测3',
      width: 150,
      dataIndex: 'address29',
      key: 'address29',
    },{
      title: '清水池液位检测2',
      width: 150,
      dataIndex: 'address30',
      key: 'address30',
    },{
      title: '清水池液位检测1',
      width: 150,
      dataIndex: 'address31',
      key: 'address31',
    },{
      title: '3#高压卧式离心泵频率反馈',
      width: 150,
      dataIndex: 'address32',
      key: 'address32',
    },{
      title: '2#高压卧式离心泵电流反馈',
      width: 150,
      dataIndex: 'address33',
      key: 'address33',
    },{
      title: '1#高压卧式离心泵电流反馈',
      width: 150,
      dataIndex: 'address34',
      key: 'address34',
    },{
      title: '1#高压卧式离心泵频率反馈',
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
          {text: '喷淋出口温度超高预警', value: 0},
          {text: '引动机手动给定频率', value: 1},
          {text: '引风机手动切换', value: 2},
          {text: '无料报警', value: 3},
          {text: 'A鼓风机运行', value: 4}
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
            size="middle"
            scroll={{ x: 5800, y: 850 }}
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
