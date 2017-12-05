import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon} from 'antd';
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
      },{
        icon: 'calendar',
        number: 0,
        company: '吨',
        text: '昨天进水量',
      },{
        icon: 'credit-card',
        number: 0,
        company: '吨',
        text: '上月进水量',
      },{
        icon: 'pie-chart',
        number: 0,
        company: '吨',
        text: '本月进水量',
      },{
        icon: 'database',
        number: 0,
        company: '吨',
        text: '年度进水量',
      }
    ]
    //水厂进量柱状图
    const visitData = [
      {
        x: '1月',
        y: 5000,
      },
      {
        x: '2月',
        y: 4600,
      },
      {
        x: '3月',
        y: 6000,
      },
      {
        x: '4月',
        y: 6500,
      },{
        x: '5月',
        y: 3500,
      },{
        x: '6月',
        y: 5500,
      },{
        x: '7月',
        y: 7500,
      },{
        x: '8月',
        y: 6500,
      },{
        x: '9月',
        y: 5500,
      },{
        x: '10月',
        y: 6500,
      },{
        x: '11月',
        y: 4500,
      },{
        x: '12月',
        y: 4000,
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
        nextText: '本月收费'
      },{
        icon: 'dot-chart',
        preNumber: 0,
        preText: '年度收费',
        company: '元',
        nextNumber: 0,
        nextText: '年度支出'
      },{
        icon: 'area-chart',
        preNumber: 0,
        preText: '年度收费',
        company: '元',
        nextNumber: 0,
        nextText: '年度支出'
      }
    ]
    //水厂收支情况
    const payData = [
      {
        x: '1月',
        y: 1,
      },{
        x: '2月',
        y: 2,
      },{
        x: '3月',
        y: 3,
      },{
        x: '4月',
        y: 3,
      },{
        x: '5月',
        y: 4,
      },{
        x: '6月',
        y: 5,
      },{
        x: '7月',
        y: 3,
      },{
        x: '8月',
        y: 1,
      },{
        x: '9月',
        y: 2,
      },{
        x: '10月',
        y: 3,
      },{
        x: '11月',
        y: 1,
      },{
        x: '12月',
        y: 2,
      },
    ]
    return (
      <div>
        <Row>
          <Col span={11} className={styles.border}>
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
          </Col>
          <Col span={11} offset={1} className={styles.border}>
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
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
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
          </Col>
        </Row>
      </div>
    );
  }
}
