const express = require("express");
const users = require("./MOCK_DATA.json");
const { status } = require("express/lib/response");
const app = express();
const PORT = 8080;


//middlewares
app.use(express.urlencoded({extended:false}));


//routes
app.get('/api/users',(req,res)=>{
    return res.json(users);
})


app.post('/api/users',(req,res)=>{
    const body = req.body ;
    users.push(...body)
    console.log(body);
    return res.json('done');
})


app.route('/api/users/:userID')
.get((req,res)=>{
    id = Number(req.params.userID) ;
    const user = users.find((user)=>user.id===id);
    return res.json(user);
})
.put((req,res)=>{

})
.delete((req,res)=>{

});

app.listen(PORT,()=> console.log("Server started successfully at port "+PORT));