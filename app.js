App({

  onLaunch(options) {
    console.log('App Launch', options);
    console.log('getSystemInfoSync', my.getSystemInfoSync());
    console.log('SDKVersion', my.SDKVersion);
   this.globalData.userInfo=my.getStorageSync({
        key: 'user'
      }).data;
      
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
  globalData: {
    userInfo:null,
    hasLogin: false,
    // host:"http://10.1.17.33:8080/jeeplus/a/alipay/alipayHbFacePay/",
    host:"http://www.soeasycollect.com:8080/jeeplus/a/alipay/alipayHbFacePay/"
  
  },
});
