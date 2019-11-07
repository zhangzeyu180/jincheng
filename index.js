const http = require('http')

const server = http.createServer((req,res)=>{
    res.end('ok')
})

server.listen(9090,() => {
    console.log("服务启动成功"+process.pid)
})