function httpPost({ url: url, data: data, success: success, faile: faile, complete: complete }) {
   
     console.log(data);
    my.httpRequest({
        url: url,
        method: "POST",
        data: data,
        dataType: 'json',
        success: function (res) {
            console.log(res);
            if (success) {
                success(res);
            }
        },
        fail: function (res) {
            console.log(res);
            my.alert({ content: 'fail' });
            if (faile) {
                faile(res);
            }
        },
        complete: function (res) {
            if (complete) {
                complete(res);

            }
            
            // my.alert({ content: 'complete' });
        }
    });
}

function saveUser(data) {
    my.setStorageSync({
        key: 'user',
        data: data
    });
}


function getUser() {
  return  my.getStorageSync({
        key: 'user'
    });
}


export default {
    httpPost: httpPost,
    saveUser: saveUser,
    getUser: getUser,
}