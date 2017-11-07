import md5utils from '/util/md5-utils';
import utils from '/util/utils';
// import  usermanager from '/util/user-manager';
import { heroName, getHero } from '/util/user-manager';
var  app=getApp();


Page({
  data: {

  }, onSubmit: function (e) {

      my.showLoading({
        success: (res) => {
          
        },
      });

      console.log(app.globalData.host+'login');
    utils.httpPost({
      url: app.globalData.host+'login', // 目标服务器 url
      data: {
        phone: "13611290917",
        password: md5utils.hex_md5("wo123456").toUpperCase(),
      },
      success: (res) => {
          console.log(res);
          utils.saveUser(res.data.result);
          app.globalData.userInfo=res.data.result;
          my.navigateBack({
            
          });
      //      my.redirectTo({
      //   url: '../main/main'
      // });
          console.log(utils.getUser());
      },
      faile: (res) => {
        
      },
      complete:(res)=>{
         my.hideLoading();
      }
    });
  },
  onLoad() {


  }, 
});
