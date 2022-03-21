import * as http from 'http';
 
var user = {
    PhoneNumber: '15210943874'
};

var userString = JSON.stringify(user);


var options:http.RequestOptions = {
    host:`127.0.0.1`,
    port:3000,
    path:'/post',
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'Content-Length':userString.length
    }
}
 
var req = http.request(options, (res)=>{
    console.log(res);
    res.setEncoding('utf8');
    res.on('data',(data)=>{
        console.log("data:",data); 
    });
});
req.write(userString);
req.end();
