require('dotenv').config();
var express = require('express');//express là một framework phổ biến để xây dựng các ứng dụng web Node.js. Dòng này tải gói express và lưu trữ nó vào biến express
    app = express(),//khởi tạo một ứng dụng Express mới và gán nó vào biến app. Biến này sẽ được sử dụng để thiết lập các tuyến đường (routes), xử lý request và response.
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');//body-parser là một middleware của Express giúp phân tích dữ liệu dạng JSON và URL-encoded được gửi trong request body.
app.use(bodyParser.urlencoded({ extended: true }));//cho phép xử lý dữ liệu dạng URL-encoded, bao gồm cả các trường nested (lồng nhau).
app.use(bodyParser.json());//cho phép xử lý dữ liệu dạng JSON.
app.use(function(req, res, next){
    req.setTimeout(1000*45, function() {
        res.status(200).json(helper.APIReturn(1, "timeout"))
    });
    next();
});

var routes = require('./routes/APIRoutes');//tải file APIRoutes.js từ thư mục ./routes/ và gán nội dung của file vào biến routes
routes(app);//thực thi hàm được export từ file APIRoutes.js, có khả năng thiết lập các tuyến đường (routes) cho ứng dụng Express. Các tuyến đường này sẽ xác định cách xử lý các request HTTP đến với ứng dụng.
app.listen(port);//khởi động ứng dụng Express trên cổng port đã được thiết lập trước đó.
console.log('Vault API started on: ' + port);