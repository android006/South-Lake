import React, { Component } from 'react';
import { connect } from 'dva';
import {Row, Col,Button, Modal, Form, Input,Select, Tree,DatePicker, Pagination, message} from 'antd';
import {size} from "../../components/AvatarList/index";
import MyTable from '../../components/MyTable/MyTable';
import {color} from "../../components/Charts/MiniProgress/index";
import styles from  './pumpHouseReport.less'
export default class PumpHouseReport extends Component {
  state = {
  tableLoading: false,
  tableData:[],
  id: 0,
}
  render() {
    let t= this;
    // table 选中事件
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
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
    return (
      <div>
        <MyTable
          rowKey="id"
          loading={t.state.tableLoading}
          dataSource={dataSource}
          pagination={false}
          columns={columns}
        />
      </div>
    );
  }
}
