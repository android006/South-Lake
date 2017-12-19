/**
 * Created by wupeng on 2017//9.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import {Row, Col, Input, Checkbox, message, Button,Icon} from 'antd';
import config from '../../components/Request/config';
import styles from'./login.less';

class Login extends Component {

  state = {
    enter: false,
    user: '',
    pwd: '',
    code: '',
    codeImg: '',
    autoLogin: false,
    loading: false,
    codeUrl: config.publicUrl + '/system/verifycode.jpg?t=',
    inputType: 'password'
  };

  componentDidMount () {
  }

//   login(){
//     let t = this;
//     let enter = !t.state.enter
//     t.setState({
//       enter
//     });
//   //window.location.href = '/#/digital/digitalSignage-list';
// }
// input change事件
  getUserInfo (inputIndex, e) {
    let t = this;
    if (inputIndex === 'autoLogin') {
      t.setState({
        autoLogin: e.target.checked
      })
    } else {
      t.setState({
        [inputIndex]: e.target.value.trim()
      });
    }
  }

  // 登录按钮
  login () {
    let t = this;
    // 判断输入框是否为空
    if (!t.state.user) {
      message.warning('用户名不能为空');
      return;
    }
    if (!t.state.pwd) {
      message.warning('密码不能为空');
      return;
    }
    if (!t.state.code) {
      message.warning('验证码不能为空');
      return;
    }
    // PublicService.fullScreen(document.documentElement);
    // t.setState({
    //   loading: true
    // });
    window.location.href = '/#/digital/digitalSignage-list';
    // let params = {
    //   password: t.state.pwd,
    //   userName: t.state.user,
    //   verifyCode: t.state.code,
    //   autoLogin: t.state.autoLogin
    // };
    // request({url: '/pms/login', method: 'POST', data: params}).then(
    //   (data) => {
    //     console.log(document.cookie, '接口后cookie');
    //     t.checkLogin(data);
    //   }
    // ).catch(() => {
    //   message.warning('登录失败');
    //   t.setState({
    //     loading: false
    //   });
    // })
  }

  // 判断是否登录成功
  checkLogin (data) {
    let t = this;
    t.setState({
      loading: false
    });
    t.refreshCode();
    if (data.rc === 1) {
      document.exitFullscreen ? document.exitFullscreen() :
        document.mozCancelFullScreen ? document.mozCancelFullScreen() :
          document.webkitExitFullscreen ? document.webkitExitFullscreen() : '';
      message.warning(data.err);
    } else {
      // 保存用户登录信息
      t.props.dispatch({type: 'login/saveUser', payload: {user: data.ret}});
      PublicService.setCookie('userId', data.ret.userId);
      PublicService.setCookie('nickName', data.ret.staffName);
      message.success('登录成功');
      window.location = '#cockpit';
    }
  }

  // 刷新验证码
  refreshCode () {
    let t = this;
    t.setState({
      codeUrl: t.state.codeUrl + new Date().getTime()
    });
  }

  // 显示密码
  pwdShow () {
    let t = this;
    t.setState({
      inputType: t.state.inputType.length === 0 ? 'password' : ''
    })
  }

  render () {
    let t = this;
    return (
      <div className={styles.bg}>
        <div className={styles['wp-content']}>
          <div className={styles['wp-login-title']}>用户登录</div>
          <div className={styles['wp-login-content']}>
            <Row>
              <Col span={18} className={styles['wp-login-input']}>
                <Input
                  addonBefore={<Icon type="user" />}
                  className={styles['wp-login-user']}
                  placeholder="用户名"
                  value={t.state.user}
                  onChange={t.getUserInfo.bind(t, 'user')}/>
              </Col>
              <Col span={18} className={styles['wp-login-input']}>
                <Input
                  type={t.state.inputType}
                  addonBefore={<Icon type="lock" />}
                  addonAfter={<Icon type="eye" onClick={t.pwdShow.bind(t)}/>}
                  className={styles['wp-login-user']}
                  placeholder="密&nbsp;&nbsp;&nbsp;&nbsp;码"
                  onChange={t.getUserInfo.bind(t, 'pwd')}/>
              </Col>
              <Col span={22} className={styles['wp-login-input']}>
                <Col span={9} className={styles['wp-login-code']}>
                  <Input
                    placeholder="验证码"
                    onChange={t.getUserInfo.bind(t, 'code')}/>
                </Col>
                <Col onClick={t.render.bind(t)} span={15}>
                  <img onClick={t.refreshCode.bind(t)} src={t.state.codeUrl}/>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col span={12} className={styles['wp-login-input']}>
              <Checkbox onChange={t.getUserInfo.bind(t, 'autoLogin')} style={{color:'#fff'}}>记住密码</Checkbox>
              </Col>
              {/*<Col span={24} push={1} className="t-FAL">*/}
              {/*<Checkbox onChange={t.getUserInfo.bind(t, 'autoLogin')}>自动登录</Checkbox>*/}
              {/*</Col>*/}
              {/*<Col span={6} >*/}
                {/*<Checkbox onChange={t.getUserInfo.bind(t, 'autoLogin')}>自动登录</Checkbox>*/}
              {/*</Col>*/}
              {/*<Col span={18}>*/}
              {/*</Col>*/}
            </Row>
            <div
              onClick={t.login.bind(t)}
              className={styles['wp-login-btn']}
              loading={t.state.loading}
            >
              登录
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {};
}

export default connect(mapStateToProps)(Login);


