const express=require('express')
const router=express.Router() 

router.get('/',(req,res)=>{
    res.send(`<html>
        <body>
        <form action='/login' method="post">
            <input type='email' name ='user'placeholder="user"/>
            <input type='password' name='pass' placeholder='password'/>
            <button>sumbit</button>
            </form>
        </body>
    </html>`)
    
})
router.post('/',(req,res)=>{
    if(req.body.email="user" && req.body.password==="123"){
    res.json({

        "status":"success"
    })
}else{
    res.json({
        "status":"failed"
    })
}
})

module.exports=router