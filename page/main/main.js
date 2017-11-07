import util from '/util/utils';
var app = getApp();
Page({
  data: {
    userName: "titiel",
    grid: {
      name: "我的的",
      list: [
        {
          "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
          "text": "交易"
        },
        {
          "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
          "text": "我的订单"
        },
        {
          "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
          "text": "成功页面"
        },
        {
          "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
          "text": "分付君"
        },
        {
          "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
          "text": "现金贷"
        },
        {
          "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
          "text": "优选加"
        }
      ],
      columnNum: 2
    }
  }, handleItemTap(e) {

    switch (e.currentTarget.dataset.index) {
      case 0:
        my.navigateTo({
          url: "../trade/trade"
        });
        break
      case 1:
        my.navigateTo({
          url: "../order/order"
        });
        break;
      case 2:
        my.navigateTo({
          url: "../success/success"
        });
        break;

    }

    my.showToast({
      content: `第${e.currentTarget.dataset.index}个Item`,
      success: (res) => {

      },
    });
  },
  onUpdate: function (e) {
    my.alert({
      title: e.target.dataset.openType, // alert 框的标题
      success: (res) => {
        my.showToast({
          content: e.target.dataset.url, // 文字内容
          success: (res) => {
          },
        });
      },
    });
  },
  onLoad() {

  }, onShow() {
    // 页面显示
    console.log("=onShow====");
     var user = util.getUser();
    if (!user.data) {
       my.alert({
       title: '请登录', // alert 框的标题
       success: (res) => {
          my.navigateTo({
                url:"../login/login"
          });
        },
     });
    }
  }, onReady() {
    // 页面加载完成
   
  }
});
