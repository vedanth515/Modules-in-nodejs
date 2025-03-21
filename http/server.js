// import http from "http"
// // console.log(http)
// const server=http.createServer((req,res)=>{
// //  console.log(req,"req obj")
//  res.write("hello this is http  module class one")
//  res.end()
// //  console.log(res)
// })

// const server2=http.createServer((req,res)=>{
//     res.write("respond came very quickly")
//     res.end()
// })


// server.listen(2000,()=>{
//     console.log("hello")
//     console.log("http://localhost:2000")
// })



// server2.listen(2001,()=>{
//     console.log("http://localhost:2001")
// })



import axios from "axios";
import http from "http";

// const server=http.createServer((req,res)=>{
//     console.log(req.method)
//     console.log(req.url)
// res.write("hello")
// res.end()
// })

// multiple endpoints
const server=http.createServer(async(req,res)=>{
    if(req.method === "GET" && req.url === "/"){
        res.write("default route no proper data")
        res.end()
    }
    else if(req.method === "GET" && req.url === "/products"){
        try{
                    await axios.get("https://fakestoreapi.com/products").then(data=>{
                        console.log(data.data, "data from api")
                               res.write(JSON.stringify(data.data))
                               res.end()
                    }).catch(err=>{
                        console.log(err)
                    })
        }
        catch(err){
            console.log(err)
        }

        // res.write(JSON.stringify({id:1,name:"laptop"}))
        // res.end()
    }
    
    else if(req.method === "GET" && req.url === "/users"){
        try{
                    await axios.get("https://dummyjson.com/users").then(data=>{
                        console.log(data.data, "data from api")
                               res.write(JSON.stringify(data.data))
                               res.end()


                               
                    }).catch(err=>{
                        console.log(err)
                    })
        }
        catch(err){
            console.log(err)
        }

        // res.write(JSON.stringify({id:1,name:"laptop"}))
        // res.end()
    }
    else{
        res.write("bnot endpoint found")
        res.end()
    }
})


const POERT=5000;
server.listen(POERT,()=>{
    console.log(`http://localhost:${POERT}/products`)
})