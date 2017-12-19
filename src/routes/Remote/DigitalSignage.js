import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon,Divider } from 'antd';
import {Bar, } from '../../components/Charts';
import styles from './digitalSignage.less';
import {size} from "../../components/AvatarList/index";
import {color} from "../../components/Charts/MiniProgress/index";

export default class DigitalSignage extends Component {
  render() {
    //水厂进量
    const items = [
      {
        icon: 'code-o',
        number: 0,
        company: '吨',
        text: '当天进水量',
        key:0
      },{
        icon: 'calendar',
        number: 0,
        company: '吨',
        text: '昨天进水量',
        key:1
      },{
        icon: 'credit-card',
        number: 0,
        company: '吨',
        text: '上月进水量',
        key:2
      },{
        icon: 'pie-chart',
        number: 0,
        company: '吨',
        text: '本月进水量',
        key:3
      },{
        icon: 'database',
        number: 0,
        company: '吨',
        text: '年度进水量',
        key:4
      }
    ]
    //水厂进量柱状图
    const visitData = [
      {
        x: '1月',
        y: 5000,
        key:0
      },
      {
        x: '2月',
        y: 4600,
        key:1
      },
      {
        x: '3月',
        y: 6000,
        key:2
      },
      {
        x: '4月',
        y: 6500,
        key:3
      },{
        x: '5月',
        y: 3500,
        key:4
      },{
        x: '6月',
        y: 5500,
        key:5
      },{
        x: '7月',
        y: 7500,
        key:6
      },{
        x: '8月',
        y: 6500,
        key:7
      },{
        x: '9月',
        y: 5500,
        key:8
      },{
        x: '10月',
        y: 6500,
        key:9
      },{
        x: '11月',
        y: 4500,
        key:10
      },{
        x: '12月',
        y: 4000,
        key:11
      },
    ];

    //水厂收支情况
    const payItem = [
      {
        icon: 'bar-chart',
        preNumber: 0,
        preText: '上月收费',
        company: '元',
        nextNumber: 0,
        nextText: '本月收费',
        key:0
      },{
        icon: 'dot-chart',
        preNumber: 0,
        preText: '年度收费',
        company: '元',
        nextNumber: 0,
        nextText: '年度支出',
        key:1
      },{
        icon: 'area-chart',
        preNumber: 0,
        preText: '年度收费',
        company: '元',
        nextNumber: 0,
        nextText: '年度支出',
        key:2
      }
    ]
    //水厂收支情况
    const payData = [
      {
        x: '1月',
        y: 1,
        key:0
      },{
        x: '2月',
        y: 2,
        key:1
      },{
        x: '3月',
        y: 3,
        key:2
      },{
        x: '4月',
        y: 3,
        key:3
      },{
        x: '5月',
        y: 4,
        key:4
      },{
        x: '6月',
        y: 5,
        key:5
      },{
        x: '7月',
        y: 3,
        key:6
      },{
        x: '8月',
        y: 1,
        key:7
      },{
        x: '9月',
        y: 2,
        key:8
      },{
        x: '10月',
        y: 3,
        key:9
      },{
        x: '11月',
        y: 1,
        key:10
      },{
        x: '12月',
        y: 2,
        key:11
      },
    ]
    return (
      <div>
        <Row gutter={24}>
          <Col span={12} >
            <div className={styles.border}>
              <div className={styles.title}><Icon type="dot-chart" />水厂进量</div>
              <Row>
                {
                  items.map(item => {
                    return(
                      <Col span={8}>
                        <div className={styles.sub}>
                          <Col span={6}>
                            <Icon type={item.icon} className={styles.icon}/>
                          </Col>
                          <Col span={12}>
                            <div>{item.number}</div>
                            <div>{item.text}</div>
                          </Col>
                          <Col span={6}>
                            {item.company}
                          </Col>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>
              <Row>
                <Col offset={1} span={22} className={styles.line}>
                  <h3 style={{color: '#000'}}>水厂进量</h3>
                </Col>
              </Row>
              <Row>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                  <div className={styles.salesBar}>
                    <Bar
                      color={'#008ACD'}
                      height={295}
                      title="收运量:单位(吨)"
                      data={visitData}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles.border}>
              <div className={styles.title}><Icon type="bar-chart" />水厂收支情况</div>
              <Row>
                {
                  payItem.map(item => {
                    return(
                      <Col span={12}>
                        <div className={styles.sub}>
                          <Col span={4}>
                            <Icon type={item.icon} className={styles.icon}/>
                          </Col>
                          <Col span={8}>
                            <div>{item.preNumber}</div>
                            <div>{item.preText}</div>
                          </Col>
                          <Col span={8}>
                            <div>{item.nextNumber}</div>
                            <div>{item.nextText}</div>
                          </Col>
                          <Col span={4}>
                            {item.company}
                          </Col>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>
              <Row>
                <Col offset={1} span={22} className={styles.line}>
                  <h3 style={{color: '#000'}}>水厂收支情况</h3>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div className={styles.salesBar}>
                    <Bar
                      color={'#008ACD'}
                      height={295}
                      title="金额(元)"
                      data={payData}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
