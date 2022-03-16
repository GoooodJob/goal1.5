import * as http from  'http';
var port = 3000
 
var contents = "asdf";
 
var options:http.RequestOptions = {
    host:`127.0.0.1`,
    port:3000,
    path:'/post',
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length':contents.length
    }
}
 
var req = http.request(options, (res)=>{
    console.log(res);
    res.setEncoding('utf8');
    res.on('data',(data)=>{
        console.log("data:",data); 
    });
});
req.write(contents);
req.end();
