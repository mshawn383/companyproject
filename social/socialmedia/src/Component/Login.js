import React,{useState} from 'react'
import {Box,Paper,Typography,TextField,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
     
        width: '35ch',
        margin:theme.spacing(1)
      },
    },
  }));
 export default function Login() {

     const [email,setEmail]=useState('')
     const [password, setPassword] = useState('')
     const handleSubmit=()=>{
         const payload={
             email:email,
             password:password
         }
         const url='http://localhost:5000/login'
         axios.post(url,payload)
         .then(response=>response.data)
         .then(data=>{
             console.log(data);
             if(data.status==='success'){
                 window.location='/home'
             }
         })
     }
     const classes=useStyles()
    return (
        <div>
            <Box textAlign="center" bgcolor="#07418C" style={{margin:"0",height:"646px"}}>
                <div className='container'>
                    <div className='row' style={{paddingTop:"100px"}}>
                        <div className="col-md-7" style={{backgroundColor:'#034AA6',height:'400px',borderRadius:'5px'}}>
<Box textAlign="center">
    <Typography variant="h3"style={{fontFamily: 'Handlee, cursive',color:'white',marginTop:'100px'}}>
Social Media<br/>
Application
    </Typography>
</Box>
                        </div>
                        <div className="col-md-5">
                            <Paper style={{height:'400px'}}>
                                <Typography variant="h4" style={{paddingTop:'20px'}}>
                                    Log in
                                </Typography>
                            <form className={classes.root} noValidate autoComplete="off" style={{marginTop:'50px'}}>
      
      <TextField id="email" label="Id/Email" variant="outlined" onChange={e=>setEmail(e.target.value)} />
      <TextField id="password" label="Password" variant="outlined" type="password" onChange={e=>setPassword(e.target.value)}/>
      <Button variant="contained" color="secondary" onClick={handleSubmit}>
  Log in
</Button>
    </form>
    <Box  style={{marginTop:'50px',marginLeft:'90px'}}>
<Typography variant="subtitle1">
    <a href='/' style={{textDecoration:'none',color:'grey'}}>Don't Have an account?  Register Yourself</a>
</Typography>
    </Box>
                            </Paper>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    )
}
