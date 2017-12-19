import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon,Modal,Button,Input, Avatar,Form, Dropdown, Tag, message, Spin } from 'antd';
import DocumentTitle from 'react-document-title';
import { connect } from 'dva';
import { Link, Route, Redirect, Switch } from 'dva/router';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import Debounce from 'lodash-decorators/debounce';
import HeaderSearch from '../components/HeaderSearch';
import NoticeIcon from '../components/NoticeIcon';
import GlobalFooter from '../components/GlobalFooter';
import PublicService from '../components/Request/PublicService';
import config from '../components/Request/config';
import NotFound from '../routes/Exception/404';
import styles from './BasicLayout.less';
import logo from '../assets/logo.svg';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const FormItem = Form.Item;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

class BasicLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  }
  constructor(props) {
    super(props);
    // 把一级 Layout 的 children 作为菜单项
    this.menus = props.navData.reduce((arr, current) => arr.concat(current.children), []);
    this.state = {
      openKeys: this.getDefaultCollapsedSubMenus(props),
      visible: false,
    };
  }
  getChildContext() {
    const { location, navData, getRouteData } = this.props;
    const routeData = getRouteData('BasicLayout');
    const firstMenuData = navData.reduce((arr, current) => arr.concat(current.children), []);
    const menuData = this.getMenuData(firstMenuData, '');
    const breadcrumbNameMap = {};

    routeData.concat(menuData).forEach((item) => {
      breadcrumbNameMap[item.path] = item.name;
    });
    return { location, breadcrumbNameMap };
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'user/fetchCurrent',
    });
  }
  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }
  onCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  }
  onMenuClick = ({ key }) => {
    if (key === 'logout') {
      this.props.dispatch({
        type: 'login/logout',
      });
    }
    if (key === 'changePwd'){
      this.setState({
        visible: true
      })
    }
  }
  getMenuData = (data, parentPath) => {
    let arr = [];
    data.forEach((item) => {
      if (item.children) {
        arr.push({ path: `${parentPath}/${item.path}`, name: item.name });
        arr = arr.concat(this.getMenuData(item.children, `${parentPath}/${item.path}`));
      }
    });
    return arr;
  }
  getDefaultCollapsedSubMenus(props) {
    const currentMenuSelectedKeys = [...this.getCurrentMenuSelectedKeys(props)];
    currentMenuSelectedKeys.splice(-1, 1);
    if (currentMenuSelectedKeys.length === 0) {
      return ['dashboard'];
    }
    return currentMenuSelectedKeys;
  }
  getCurrentMenuSelectedKeys(props) {
    const { location: { pathname } } = props || this.props;
    const keys = pathname.split('/').slice(1);
    if (keys.length === 1 && keys[0] === '') {
      return [this.menus[0].key];
    }
    return keys;
  }
  getNavMenuItems(menusData, parentPath = '') {
    if (!menusData) {
      return [];
    }
    return menusData.map((item) => {
      if (!item.name) {
        return null;
      }
      let itemPath;
      if (item.path.indexOf('http') === 0) {
        itemPath = item.path;
      } else {
        itemPath = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
      }
      if (item.children && item.children.some(child => child.name)) {
        return (
          <SubMenu
            title={
              item.icon ? (
                <span>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </span>
              ) : item.name
            }
            key={item.key || item.path}
          >
            {this.getNavMenuItems(item.children, itemPath)}
          </SubMenu>
        );
      }
      const icon = item.icon && <Icon type={item.icon} />;
      return (
        <Menu.Item key={item.key || item.path}>
          {
            /^https?:\/\//.test(itemPath) ? (
              <a href={itemPath} target={item.target}>
                {icon}<span>{item.name}</span>
              </a>
            ) : (
              <Link
                to={itemPath}
                target={item.target}
                replace={itemPath === this.props.location.pathname}
              >
                {icon}<span>{item.name}</span>
              </Link>
            )
          }
        </Menu.Item>
      );
    });
  }
  getPageTitle() {
    const { location, getRouteData } = this.props;
    const { pathname } = location;
    let title = 'Ant Design Pro';
    getRouteData('BasicLayout').forEach((item) => {
      if (item.path === pathname) {
        title = `${item.name} - Ant Design Pro`;
      }
    });
    return title;
  }
  getNoticeData() {
    const { notices = [] } = this.props;
    if (notices.length === 0) {
      return {};
    }
    const newNotices = notices.map((notice) => {
      const newNotice = { ...notice };
      if (newNotice.datetime) {
        newNotice.datetime = moment(notice.datetime).fromNow();
      }
      // transform id to item key
      if (newNotice.id) {
        newNotice.key = newNotice.id;
      }
      if (newNotice.extra && newNotice.status) {
        const color = ({
          todo: '',
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        })[newNotice.status];
        newNotice.extra = <Tag color={color} style={{ marginRight: 0 }}>{newNotice.extra}</Tag>;
      }
      return newNotice;
    });
    return groupBy(newNotices, 'type');
  }
  handleOpenChange = (openKeys) => {
    const lastOpenKey = openKeys[openKeys.length - 1];
    const isMainMenu = this.menus.some(
      item => lastOpenKey && (item.key === lastOpenKey || item.path === lastOpenKey)
    );
    this.setState({
      openKeys: isMainMenu ? [lastOpenKey] : [...openKeys],
    });
  }
  toggle = () => {
    const { collapsed } = this.props;
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: !collapsed,
    });
    this.triggerResizeEvent();
  }
  @Debounce(600)
  triggerResizeEvent() { // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  handleNoticeClear = (type) => {
    message.success(`清空了${type}`);
    this.props.dispatch({
      type: 'global/clearNotices',
      payload: type,
    });
  }
  handleNoticeVisibleChange = (visible) => {
    if (visible) {
      this.props.dispatch({
        type: 'global/fetchNotices',
      });
    }
  }
  // 输入框change事件
  inputChange (flag, e) {
    let t = this;
    t.setState({
      [flag]: e.target.value
    });
  }
  // 修改密码输入框显隐
  changeModal () {
    let t = this;
    t.setState({visible: !t.state.visible});
  }
  // 检测两次新密码是否一致
  checkPwd (flag, rule, value, callback) {
    let t = this;
    t.setState({
      [flag]: value
    }, () => {
      if (t.state.newPsw && t.state.secondPsw && (t.state.secondPsw !== t.state.newPsw)) {
        callback('两次密码不一致');
      } else {
        callback();
      }
    });
  }
  submit () {
    let t = this;
    console.log("修改密码成功",'submit')
    // request({
    //   url: '/admin/user/updatePsw',
    //   method: 'POST',
    //   data: {
    //     ...t.state,
    //     userId: PublicService.getCookie('userId')
    //   }
    // }).then(
    //   data => {
    //     if (data.rc === 0) {
    //       t.changeModal();
    //       message.success('修改成功');
    //     } else {
    //       message.error('修改失败');
    //     }
    //   }
    // ).catch(
    //   err => {
    //     console.info(err, 'err');
    //     message.error('修改失败');
    //   }
    // );
  }

  render() {
    let t = this;
    const formItemLayout = {
      labelCol: {span: 4},
      wrapperCol: {span: 8},
    };
    let {getFieldDecorator} = t.props.form;
    const { currentUser, collapsed, fetchingNotices, getRouteData } = this.props;
    const menu = (
      <Menu onClick={t.onMenuClick.bind(t)} className={styles.menu}>
        <Menu.Item key="changePwd" onClick={t.changeModal.bind(t)}>
          <Icon style={{fontSize: 12, marginRight: 4}} type="lock"/>
          <span >修改密码</span>
        </Menu.Item>
        <Menu.Item key="logout">
          <Icon style={{fontSize: 12, marginRight: 4}} type="poweroff"/>
          <span >退出登录</span>
        </Menu.Item>
      </Menu>
    );
    const noticeData = this.getNoticeData();

    // Don't show popup menu when it is been collapsed
    const menuProps = collapsed ? {} : {
      openKeys: this.state.openKeys,
    };

    const layout = (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="md"
          onCollapse={this.onCollapse}
          width={280}
          className={styles.sider}
          style={{overflow: 'auto', height: '100vh'}}
        >
          <div className={styles.logo}>
            <Link to="/digital/digitalSignage-list">
              <img src={logo} alt="logo" />
              <h1>南湖中水厂监控平台</h1>
            </Link>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            {...menuProps}
            onOpenChange={this.handleOpenChange}
            selectedKeys={this.getCurrentMenuSelectedKeys()}
            style={{ margin: '16px 0', width: '100%' }}
          >
            {this.getNavMenuItems(this.menus)}
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Icon
              className={styles.trigger}
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div className={styles.right}>
              <Dropdown trigger={['click']} overlay={menu} placement="bottomCenter">
                  <span className={styles['ant-dropdown-link']} style={{cursor:'pointer',marginRight:'20px'}}>
                  {PublicService.getCookie('nickName')}
                    <Icon className={styles['t-ML2']} type="down"/>
                </span>
              </Dropdown>
            </div>
            <Modal
              title="修改密码"
              onCancel={t.changeModal.bind(t)}
              visible={t.state.visible}
              className={styles['wp-change-pwd']}
              footer={[
                <Button onClick={t.changeModal.bind(t)} className={styles['wp-btn']} key="back" size={config.size}>返回</Button>,
                <Button onClick={t.submit.bind(t)} className={styles['wp-btn']} key="submit" size={config.size}> 确认 </Button>,
              ]}
            >
              <Form>
                <FormItem {...formItemLayout} label="原密码">
                  {getFieldDecorator('oldPsw', {
                    rules: [{
                      required: true,
                      message: '请输入原密码',
                    }],
                  })(
                    <Input onChange={t.inputChange.bind(t, 'oldPsw')} size={config.size} placeholder="请输入原密码"/>
                  )}
                </FormItem>
                <FormItem {...formItemLayout} label="新密码">
                  {getFieldDecorator('newPsw', {
                    rules: [{
                      required: true,
                      message: '请输入新密码',
                    }, {
                      validator: t.checkPwd.bind(t, 'newPsw')
                    }],
                  })(
                    <Input size={config.size} placeholder="请输入新密码"/>
                  )}
                </FormItem>
                <FormItem {...formItemLayout} label="新密码确认">
                  {getFieldDecorator('secondPsw', {
                    rules: [{
                      required: true,
                      message: '请再次输入新密码',
                    }, {
                      validator: t.checkPwd.bind(t, 'secondPsw')
                    }],
                  })(
                    <Input size={config.size} placeholder="请输入新密码"/>
                  )}
                </FormItem>
              </Form>
            </Modal>
            {/*<div className={styles.right}>*/}
              {/*<HeaderSearch*/}
                {/*className={`${styles.action} ${styles.search}`}*/}
                {/*placeholder="站内搜索"*/}
                {/*dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}*/}
                {/*onSearch={(value) => {*/}
                  {/*console.log('input', value); // eslint-disable-line*/}
                {/*}}*/}
                {/*onPressEnter={(value) => {*/}
                  {/*console.log('enter', value); // eslint-disable-line*/}
                {/*}}*/}
              {/*/>*/}
              {/*<NoticeIcon*/}
                {/*className={styles.action}*/}
                {/*count={currentUser.notifyCount}*/}
                {/*onItemClick={(item, tabProps) => {*/}
                  {/*console.log(item, tabProps); // eslint-disable-line*/}
                {/*}}*/}
                {/*onClear={this.handleNoticeClear}*/}
                {/*onPopupVisibleChange={this.handleNoticeVisibleChange}*/}
                {/*loading={fetchingNotices}*/}
                {/*popupAlign={{ offset: [20, -16] }}*/}
              {/*>*/}
                {/*<NoticeIcon.Tab*/}
                  {/*list={noticeData['通知']}*/}
                  {/*title="通知"*/}
                  {/*emptyText="你已查看所有通知"*/}
                  {/*emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"*/}
                {/*/>*/}
                {/*<NoticeIcon.Tab*/}
                  {/*list={noticeData['消息']}*/}
                  {/*title="消息"*/}
                  {/*emptyText="您已读完所有消息"*/}
                  {/*emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"*/}
                {/*/>*/}
                {/*<NoticeIcon.Tab*/}
                  {/*list={noticeData['待办']}*/}
                  {/*title="待办"*/}
                  {/*emptyText="你已完成所有待办"*/}
                  {/*emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"*/}
                {/*/>*/}
              {/*</NoticeIcon>*/}
              {/*{currentUser.name ? (*/}
                {/*<Dropdown overlay={menu}>*/}
                  {/*<span className={`${styles.action} ${styles.account}`}>*/}
                    {/*<Avatar size="small" className={styles.avatar} src={currentUser.avatar} />*/}
                    {/*{currentUser.name}*/}
                  {/*</span>*/}
                {/*</Dropdown>*/}
              {/*) : <Spin size="small" style={{ marginLeft: 8 }} />}*/}
            {/*</div>*/}
          </Header>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <div style={{ minHeight: 'calc(100vh - 260px)' }}>
              <Switch>
                {
                  getRouteData('BasicLayout').map(item =>
                    (
                      <Route
                        exact={item.exact}
                        key={item.path}
                        path={item.path}
                        component={item.component}
                      />
                    )
                  )
                }
                <Redirect exact from="/" to="/digital/digitalSignage-list" />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}

export default connect(state => ({
  currentUser: state.user.currentUser,
  collapsed: state.global.collapsed,
  fetchingNotices: state.global.fetchingNotices,
  notices: state.global.notices,
}))(Form.create()(BasicLayout));
