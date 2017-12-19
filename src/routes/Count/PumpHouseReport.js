import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon,Table ,Pagination} from 'antd';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";
import Filtrate from "../../components/Filtrate/filtrate";
import styles from  './combinedPoolReport.less'
export default class PumpHouseReport extends Component {
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
      dataIndex: 'time',
      key: 'time',
    }, {
      title: '1#号双吸泵平率反馈',
      dataIndex: 'age',
      key: 'age',
    },{
      title: '1#号双吸泵电流反馈',
      dataIndex: 'age1',
      key: 'age1',
    },{
      title: '2#号双吸泵平率反馈',
      dataIndex: 'age11',
      key: 'age11',
    },{
      title: '2#号双吸泵电流反馈',
      dataIndex: 'address',
      key: 'address',
    },{
      title: '3#号双吸泵电流反馈',
      dataIndex: 'address1',
      key: 'address1',
    },{
      title: '4#号双吸泵电流反馈',
      dataIndex: 'address11',
      key: 'address11',
    },{
      title: '取水泵站干管压力值1',
      dataIndex: 'address2',
      key: 'address2',
    },{
      title: '取水泵站干管压力值2',
      dataIndex: 'address3',
      key: 'address3',
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
          {text: 'A鼓风机运行', value: '3'},
          {text: 'B鼓风机运行', value: '4'},
          {text: '引风机运行', value: '5'},
          {text: '搅拌机2运行', value: '6'},
          {text: '安全阀关到位', value: '7'},
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
