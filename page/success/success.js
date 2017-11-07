import Success from './template/success';

Page({
   ...Success,

   data: {
        errorData: {
            type: 'empty',
            title: '交易成功',
            button: '返回首页',
            onButtonTap: 'handleBack',
            href: '/pages/list/index'
        },
    },
    handleBack() {
        my.showToast({
          content: 'back to pages/index in 1s',
          success: (res) => {
            setTimeout(() => {
                my.navigateBack({
                    delta:2
                });
            }, 1000);
          },
        });
    },
  onLoad() {},
});
