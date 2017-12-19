/***
 * 容器组件 定制了 新增与输出按钮
 * addBtnShow 新增按钮显隐, exportBtnShow 输出按钮显隐, extraBtn 额外按钮数组
 */
import React, {Component} from 'react';
import {Icon, Dropdown, Upload, Menu, message, Popconfirm} from 'antd';
import styles from './export.less'

class Container extends Component {
  state = {
    // uploadConfig: {}
    exportBoolean: false
  };

  componentDidMount () {
  }

  // 调用父组件相应方法
  doFatherFunction (fatherFunction) {
    let t = this;
    t.props[fatherFunction]();
  }

  exportHandle (status) {
    this.setState({
      exportBoolean: true
    });
    this.props.exportBtn(status)
  }

  render () {
    let t = this;
    return (
      <div className={styles.wpContainer}>
        <div className={styles.wpContainerHeader}>
          {
            t.props.exportBtnShow &&
            <Popconfirm
              onConfirm={t.exportHandle.bind(t, 'all')}
              onCancel={t.exportHandle.bind(t, 'part')}
              title="导出全部/导出本页?"
              okText='导出全部'
              cancelText="导出本页"
            >
              <span>
              <Icon type="download" />

              <span>输出</span>
                {
                  (extraBtn.length !== 0 || menu || t.props.importBtnUrl || t.props.deleteBtnShow) &&
                  <span className={styles.wpLine}> </span>
                }
              </span>
            </Popconfirm>
          }
        </div>
      </div>
    )
  }
}

export default Container;
