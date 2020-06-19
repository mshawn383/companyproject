const express=require('express')
const session=require('express-session')
const axios=require('axios')
const login =require('./routes/login.route')
const cors =require('cors')
const register =require('./routes/register.route')

const app=express();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use('/login',login)
app.use('/register',register)

app.get('/',(req,res)=>{
res.send('Hello Backend')
})

app.listen(5000,function(){
    console.log("Running at Port 5000");
    
})