
const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function(req,res){
    
    if(req.url == '/nodejs'){

        fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();

   });

    }else{
        return res.end("404 not found")
    }


});


server.listen(port,hostname,()=>{
    console.log('Servidor esta rodando ');
})
