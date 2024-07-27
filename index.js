const { Socket } = require('dgram');
let express=require('express');
let http=require('http')
let app=express();
let path=require('path');

let {Server}=require('socket.io');

app.use(express.static(path.basename('./public')))
let server=http.createServer(app);

let io=new Server(server)

io.on('connection',(sockat)=>{
     console.log('new user',sockat.id);
         // frontned message resive and also give same name
sockat.on('user-mesage',(message)=>{
 console.log('message come frontned ',message)
// send all message 
io.emit('message',message);
}) 
})

app.get('/',(req,res)=>{
return res.sendFile('./public/index.html')})
server.listen(8000,()=>{
    console.log('connect')
})