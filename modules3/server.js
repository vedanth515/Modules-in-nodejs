import http from "http"

// console.log(http.createServer())

const server=http.createServer((req,res)=>{
    // console.log(req,"req")
    // console.log(res, "res")
    // console.log(req.method)
    // console.log(req.url)
    if(req.method === "GET" && req.url === "/"){
        console.log("products")
    }
})

// console.log(server)
server.listen(4000,()=>{
    console.log("server running on port no 4000   http://localhost:4000/products")
})


const server2=http.createServer((req,res)=>{

 console.log("server2")
})

server2.listen(4001,()=>{
    console.log("server 2 on running port 4001")
})
