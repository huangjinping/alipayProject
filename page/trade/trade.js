import utils from '/util/utils'
var app = getApp();
Page({
  data: {
    isShowLoading: false,
    timer: 30,
    authCode: "",
    currentTab: 1,
    price: 0,
    totAmt: '',
    feeAmt: '',
    periodAmt: '',
    tags: [
      {
        label: '3期数',
        selected: false,
        onChange: 'onTagChange1',
        hbFqNum: 3
      },
      {
        label: '6期数',
        selected: true,
        onChange: 'onTagChange1',
        hbFqNum: 6

      },
      {
        label: '12期数',
        selected: false,
        onChange: 'onTagChange1',
        hbFqNum: 12
      }
    ]
  }, priceInputConfirm(e) {
    this.setData({
      price: e.detail.value
    });
    this.updatePeriodAmount();

  }, priceInputBlur(e) {
    this.setData({
      price: e.detail.value
    });

    this.updatePeriodAmount();

  },
  onTagChange1(e) {
    console.log(e);
    this.onTagChange(e.target.dataset.selected, e.target.dataset.ids);
  },
  onTagChange(selected, index) {
    const tempTag = this.data.tags;
    tempTag.map(function (item, index) {
      tempTag[index].selected = false;
    });
    tempTag[index].selected = true;
    this.setData({
      tags: tempTag,
      currentTab: index,

    });
    this.updatePeriodAmount();
  }, updatePeriodAmount() {
    var userInfo = app.globalData.userInfo;
    const hbFqNum = this.data.tags[this.data.currentTab].hbFqNum;
    console.log(userInfo);
    if (this.data.price == 0) {
      return;
    }
    my.showLoading({
      success: (res) => {
      },
    });
    var _that = this;
    utils.httpPost({
      url: app.globalData.host + "/queryFqInfo",
      data: {
        id: userInfo.id,
        token: userInfo.token,
        price: this.data.price,
        hbFqNum: hbFqNum
      },
      success: function (res) {
        var result = res.data.result;
        _that.setData({
          periodAmt: result.periodAmt,
          feeAmt: result.feeAmt,
          totAmt: result.totAmt,
        }
        );
      },
      faile: function (res) {
        my.showToast({
          content: JSON.parse(res),
          success: (res) => {

          },
        });
      },
      complete: function () {
        my.hideLoading();
      }
    }
    );
  }, onScanCode: function () {


    var that = this;

    my.scan({
      type: 'qr',
      success: (res) => {
        that.setData({
          authCode: res.code
        });
      },
    });
  }, onSubmit: function (res) {
    my.redirectTo({
      url:"../success/success",
    });
    //  formVaule.authCode
    var formVaule = res.detail.value;
    if (formVaule.goods_name.length == 0) {
      my.showToast({
        content: '请输入商品名称', // 文字内容
        success: (res) => {
        },
      });
      return;
    }
    if (this.data.price == 0) {
      my.showToast({
        content: '请输入商品价格', // 文字内容
        success: (res) => {
        },
      });
      return;
    }
    if (formVaule.authCode.length == 0) {
      my.showToast({
        content: '请先扫面用户的花呗支付码', // 文字内容
        success: (res) => {
        },
      });
      return;
    }


    var userInfo = app.globalData.userInfo;
    this.startLoading();
    var that = this;
    utils.httpPost({
      url: app.globalData.host + "scanPay",
      data: {
        id: userInfo.id,
        token: userInfo.token,
        periodAmt: that.data.periodAmt,
        price: this.data.price,
        hbFqNum: this.data.tags[this.data.currentTab].hbFqNum,
        authCode: formVaule.authCode,
        goods_name: formVaule.goods_name,
      },
      success: function (res) {
        if (res.data == 0) {

        } else {
          my.showToast({
            content: res.data.message, // 文字内容
            success: (res) => {
            },
          });
        }
      },
      faile: function (res) {
        my.showToast({
          content: "请求异常请重新提交", // 文字内容
          success: (res) => {

          },
        });

      },
      complete: function () {
        that.stopLoadingView();
      }
    });
  }, onCancel() {

  },
  startLoading() {
    var that = this;
    that.setData({
      timer: 30,
      isShowLoading: true,
    });
    var interval = setInterval(function () {
      if (that.data.isShowLoading == false) {
        clearInterval(interval);
        return;
      }
      if (that.data.timer == 0) {
        clearInterval(interval);
        that.setData({
          isShowLoading: false
        });
        return;
      }
      that.setData({
        timer: that.data.timer - 1
      });
    }, 1000);
  },
  stopLoadingView() {
    this.setData({
      isShowLoading: false
    });
  },
  onLoad() {
  },
});
