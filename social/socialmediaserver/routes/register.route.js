const express=require('express')
const router=express.Router()


router.post('/',(req,res)=>{
const {name,email,password,confirmpassword}=req.body
console.log(name,password)
if(password!=confirmpassword){
    res.json({
        status:'Failed'
    })
}else{
res.json({
    "status":'register'
})
}
})



module.exports =router