"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var user = {
    phoneNumber: '15210943874',
    ID: 12345678910
};
var userString = JSON.stringify(user);
var options = {
    host: "127.0.0.1",
    port: 3000,
    path: '/post',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': userString.length
    }
};
var req = http.request(options, function (res) {
    console.log(res);
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log("data:", data);
    });
});
req.write(userString);
req.end();
//# sourceMappingURL=clients.js.map