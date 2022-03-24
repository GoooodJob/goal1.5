"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpServer = void 0;
var express = require("express");
/**
 * Http的服务器
 */
var HttpServer = /** @class */ (function () {
    function HttpServer(port) {
        this.app = express();
        this.port = port;
        //配置所有服务
        this.setupServices();
    }
    /**
     * 配置本服务器所有的服务
     */
    HttpServer.prototype.setupServices = function () {
        //配置根目录
        this.app.post('/post', function (req, res) {
            req.setEncoding('utf8');
            //接收数据
            var data = '';
            req.on('data', function (chunk) {
                data += chunk;
                console.log('data:', chunk);
            });
            req.on('end', function () {
                var obj = JSON.parse(data);
                console.log('end', obj.phoneNumber);
                console.log('end', obj.ID);
                res.send(" ".concat(obj.phoneNumber, " ").concat(obj.ID, " POST request to the homepage"));
            });
            req.on('close', function () {
                console.log('close');
            });
        });
    };
    /**
     * 启动服务器
     */
    HttpServer.prototype.start = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("App listening on the http://127.0.0.1:".concat(_this.port));
        });
    };
    return HttpServer;
}());
exports.HttpServer = HttpServer;
//实例化一个HttpServer类，设置其端口为3000
var httpServer = new HttpServer(3000);
//调用这个实例的“启动”方法，以启动此服务器。
httpServer.start();
//# sourceMappingURL=server.js.map