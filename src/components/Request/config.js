/**
 * Created by wupeng
 */
export default {
  // 分页
  pageSize: 10,
  size: 'small',
  // 提示信息style
  info: {
    delete: {
      success: '删除信息成功',
      error: '删除信息失败',
    },
    update: {
      success: '修改信息成功',
      error: '修改信息失败',
    },
    save: {
      success: '保存信息成功',
      error: '保存信息失败',
    },
  },
  // 开启导航过权限控制
  authMenu: true,
  // 接口公共路径
  publicUrl: 'http://183.129.170.222:8088/mockjs/95',
  // 表报公共路径
  publicReportUrl: 'http://101.37.110.87:8100/gngc/',
  // 文件预览前面IP地址 以后会变,需要更改
  publicPreviewFront: 'http://101.37.110.87:8100/gngcpreview',
  // 文件预览后面IP地址,以后会变,需要更改
  publicPreviewAfter: 'http://10.80.178.59:8100/gngc',
  // 后台季度标识转换
  seasons: {
    '1': '第一季度',
    '2': '第二季度',
    '3': '第三季度',
    '4': '第四季度'
  },
  seasonColors: {
    '1': '#FF6970',
    '2': '#FDBA5B',
    '3': '#71D96C',
    '4': '#00B0F1'
  },
  // 对应周的数字
  weekNumMatch: {
    1: '第一周',
    2: '第二周',
    3: '第三周',
    4: '第四周',
    5: '第五周',
    6: '第六周',
    7: '第七周'
  },

  // 预付款类型
  receiveType: [
    {text: '预付款', value: '预付款'},
    {text: '进度款', value: '进度款'},
    {text: '竣工验收回款', value: '竣工验收回款'},
    {text: '结算款', value: '结算款'},
    {text: '质保金', value: '质保金'},
    {text: '其他', value: '其他'}
  ],

  // 结算状态
  settlementState: [
    {text: '已完成', value: '已完成'},
    {text: '未完成', value: '未完成'},
  ],

  // 过程资料是否完善
  settlementFileState: [
    {text: '完整', value: '完整'},
    {text: '不完整', value: '不完整'},
  ],

  // 审计状态
  auditState: [
    {text: '已完成', value: '已完成'},
    {text: '未完成', value: '未完成'},
  ],

  // 选择框宽度,日期选择框宽度
  selecteWidth: {width: 140},

  // rc 对应的方法
  rc: {
    0: 'success',
    1: 'error'
  }
}
