import utils from "/util/utils";
var app = getApp();
var LoadMode = {
  NOMAL: 1,
  PULL_REFRSH: 2,
  UP_REFRESH: 3,

}
Page({
  data: {
    userInfo: {},
    navTab: ["推荐", "圆桌"],
    currentNavtab: "0",
    toView: 'red',
    scrollTop: 100,
    tradeList: [{
      price: 231,
      goodsName: "夏侯惇",
      tradeTime: "2017-12-01",
      tradeStatus: "未提交",
      mark: "忘记提交了"
    }, {
      price: 1234,
      goodsName: "后裔",
      tradeTime: "2017-12-11",
      tradeStatus: "已提交",
      mark: "东塔的厦门"
    }, {
      price: 1234,
      goodsName: "后裔",
      tradeTime: "2017-12-11",
      tradeStatus: "已提交",
    }],
    tradeUnList: [{
      price: 231,
      goodsName: "马克菠萝",
      tradeTime: "2017-12-01",
      tradeStatus: "未提交",
      mark: "忘记提交了"
    }, {
      price: 1234,
      goodsName: "鲁尼奇",
      tradeTime: "2017-12-11",
      tradeStatus: "已提交",
      mark: "东塔的厦门"
    }, {
      price: 1234,
      goodsName: "没卡楼",
      tradeTime: "2017-12-11",
      tradeStatus: "已提交",
    }, {
      price: 1234,
      goodsName: "鲁尼奇",
      tradeTime: "2017-12-11",
      tradeStatus: "已提交",
      mark: "东塔的厦门"
    }, {
      price: 1234,
      goodsName: "没卡楼",
      tradeTime: "2017-12-11",
      tradeStatus: "已提交",
    }, {
      price: 1234,
      goodsName: "没卡楼",
      tradeTime: "2017-12-11",
      tradeStatus: "已提交",
    }, {
      price: 1234,
      goodsName: "鲁尼奇",
      tradeTime: "2017-12-11",
      tradeStatus: "已提交",
      mark: "东塔的厦门"
    }, {
      price: 1234,
      goodsName: "没卡楼",
      tradeTime: "2017-12-11",
      tradeStatus: "已提交",
    }, {
      price: 1234,
      goodsName: "没卡楼",
      tradeTime: "2017-12-11",
      tradeStatus: "已提交",
    }, {
      price: 1234,
      goodsName: "鲁尼奇",
      tradeTime: "2017-12-11",
      tradeStatus: "已提交",
      mark: "东塔的厦门"
    }, {
      price: 1234,
      goodsName: "没卡楼",
      tradeTime: "2017-12-11",
      tradeStatus: "已提交",
    }]
  }, onPullDownRefresh() {
    console.log('onPullDownRefresh', new Date())
  },
  switchTab: function (e) {
    console.log("======" + e);
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  }, upper(e) {
    console.log("upper" + e);
  },
  lower(e) {
    console.log("lower" + e);
  },
  scroll(e) {
    console.log(e.detail.scrollTop);
  },
  scrollToTop(e) {
    console.log(e);
    this.setData({
      scrollTop: 0,
    });
  },
  onLoad() {
    this.data.userInfo = app.globalData.userInfo;
    // my.alert({
    //   title: LoadMode.NOMAL+"", // alert 框的标题
    //   success: (res) => {
    //   },
    // });

  }, onLoadDataList(tradeStatus, LoadMode) {
    /**
     * 防止token 失效等问题每次提交的时候都重新获取一下
     */
    if (loadMode == LoadMode.NOMAL) {
      //弹出加载框
    }
    if (loadMode != LoadMode.UP_REFRESH) {
      page = 0;
    }
    userInfo = app.globalData().userInfo;

    var _that = this;
    utils.httpPost({
      url: app.globalData() + "asdasd",
      data: {
        id: userInfo.id,
        token: userInfo.id,
        startData: "",
        endData: "",
        tradeStatus: tradeStatus
      }, success: function (res) {
        var data = [];
        if (loadMode != LoadMode.UP_REFRESH) {
          _that.data.tradeList = [];
        }
        _that.setData(
          {
            tradeList: _that.data.tradeList.concat(data)
          }
        );

      }, faile: function (res) {

      }, complate: function () {

      }
    });

    my.alert({
      title: 'asdads', // alert 框的标题
      success: (res) => {

      },
    });
  },
});
