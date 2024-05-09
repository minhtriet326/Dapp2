'use strict';//bật chế độ nghiêm ngặt trong JavaScript. Chế độ này giúp ngăn chặn một số lỗi lập trình phổ biến và cải thiện chất lượng mã.
module.exports = function(app) {
    var api = require('../controllers/APIController');//tải hàm withdraw từ file APIController.js
    app.post('/api/withdraw', api.withdraw);//Khi một request POST gửi đến URL này, hàm api.withdraw (được import từ APIController.js) sẽ được thực thi để xử lý request đó.
}