import axios from "axios";

let data=[]
async function  getData() {
  
    try{
           await axios.get("https://fakestoreapi.com/products").then(res=>{
            console.log(res,"res in .then")
            data=res
            // res
            // res.filter(item=>item.category==="electronics")
           }).catch(err=>console.log(err))
           console.log(data,"data outside catch")
    }
    catch(err){
   console.log(err)
    }
}

getData()