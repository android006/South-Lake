import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import { Row, Col} from 'antd';

const style = {
  height: '25rem',
  width: '38rem',
  border: '1px solid gray',
  color: 'black',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}

const dustbinTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem())
  },
}

@DropTarget(props => props.accepts, dustbinTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class Dustbin extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
    lastDroppedItem: PropTypes.object,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    onDrop: PropTypes.func.isRequired,
  }

  render() {
    const {
      accepts,
      isOver,
      canDrop,
      connectDropTarget,
      lastDroppedItem,
      width,
      height,
    } = this.props
    const isActive = isOver && canDrop
    let backgroundColor = '#ccc'
    if (isActive) {
      backgroundColor = 'darkgreen'
    } else if (canDrop) {
      backgroundColor = 'darkkhaki'
    }

    return connectDropTarget(
        <div style={{ ...style, backgroundColor, width, height }}>
          {isActive ? '释放掉' : ''}
          {lastDroppedItem && (
            <p>最近一次: {JSON.stringify(lastDroppedItem)}</p>
          )}
        </div>,
    )
  }
}
