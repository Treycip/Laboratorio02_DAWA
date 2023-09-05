const express = require('express');

const app = express();

app.use(express.json());
app.get('/',(req,res)=> {
    res.sendFile('./static/index.html',{
        root:__dirname
    })
})
app.get('/about',(req,res)=>{
    res.json({
        username: 'Treyci',
        lastname: 'Perez'
    })
})
  
  
app.listen(3000)
console.log(`Server on port ${3000}`);