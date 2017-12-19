import React, { Component } from 'react'
import update from 'immutability-helper'
import { Row, Col, Icon, Divider ,Button} from 'antd';
import { DragDropContext } from 'react-dnd'
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'
import ItemTypes from './ItemTypes'
import styles from './pumpVideo.less'
import form from "../../models/form";


@DragDropContext(HTML5Backend)
export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      split: 4,
      width:'100%',
      num:12,
      height: '42vh',
      dustbins1: [
        { accepts: [ItemTypes.FOOD,ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },//type:GLASS,FOODP,APER
        { accepts: [ItemTypes.FOOD,ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.FOOD,ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.FOOD,ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.FOOD,ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.FOOD,ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.FOOD,ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.FOOD,ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.FOOD,ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },
      ],
      dustbins:[
        { accepts: [ItemTypes.FOOD,ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.FOOD,ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.FOOD,ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.FOOD,ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },],
      boxes: [
        { name: '预置点1', type: ItemTypes.GLASS },
        { name: '预置点2', type: ItemTypes.FOOD },
        { name: '预置点3', type: ItemTypes.PAPER },
        { name: '预置点4', type: ItemTypes.GLASS },
        { name: '预置点5', type: ItemTypes.FOOD },
        { name: '预置点6', type: ItemTypes.PAPER },
        { name: '预置点7', type: ItemTypes.GLASS },
        { name: '预置点8', type: ItemTypes.FOOD },
        { name: '预置点9', type: ItemTypes.PAPER },
      ],
      droppedBoxNames: [],
    }
  }
  onclick(number) {
    let t = this;
    let splic = [...t.state.dustbins1].slice(0,number)
    if (number === 1 ){
      this.setState({
        split: number,
        dustbins: splic,
        height:'84vh',
        num:24
      })
    }
    if (number === 4 ){
      this.setState({
        split: number,
        dustbins: splic,
        num:12,
        height: '42vh',
      })
    }
    if (number === 9){
      this.setState({
        split: number,
        dustbins: splic,
        num:8,
        height:'28vh',
      })
    }
    console.log(splic)
  }
  isDropped(boxName) {
    return this.state.droppedBoxNames.indexOf(boxName) > -1
  }

  render() {
    let t = this;
    const { boxes, dustbins,dustbins1,dustbins2 } = t.state;

    return (
      <div>
        <Row  gutter={24}>
          <Col xs={20} sm={20} md={20} lg={20} xl={20}>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              {
                dustbins.map(({ accepts, lastDroppedItem }, index) => (
                  <Col md={t.state.num} lg={t.state.num} xl={t.state.num}>
                  <Dustbin
                    accepts={accepts}
                    lastDroppedItem={lastDroppedItem}
                    width={t.state.width}
                    height={t.state.height}
                    onDrop={item => this.handleDrop(index, item)}
                    key={index}
                  />
                  </Col>
                ))
              }
            </div>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <h2>分屏列表</h2>
            <Row>
              <Button style={{width:'3vw', height:'4.5vh'}} type="primary" onClick={t.onclick.bind(t,1)}><Icon type="laptop" /></Button>
              <Button style={{marginLeft: '10px',width:'3vw', height:'4.5vh'}} type="primary" onClick={t.onclick.bind(t,4)} ><Icon type="appstore" /></Button>
              <Button style={{marginLeft: '10px',width:'3vw', height:'4.5vh'}} type="primary" onClick={t.onclick.bind(t,9)} ><Icon type="table" /></Button>
            </Row>
            <Divider/>
            <h2>视频列表</h2>
            <Divider/>
            <Row>
              <div style={{ overflow: 'hidden', clear: 'both' }}>
                {boxes.map(({ name, type }, index) => (
                  <Box
                    name={name}
                    type={type}
                    isDropped={this.isDropped(name)}
                    key={index}
                  />
                ))}
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }

  handleDrop(index, item) {
    const { name } = item
    const droppedBoxNames = name ? { $push: [name] } : {}

    this.setState(
      update(this.state, {
        dustbins: {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        },
        droppedBoxNames,
      }),
    )
  }
}
