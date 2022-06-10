var express=require('express');
const app=express();
const cors = require('cors');
app.use(cors({
  origin: '*'
}));


app.get('/', (req, res, next)=>{
  res.send("Hello World")
})
app.get('/api/customers',cors(), (req, res, next)=>{
  const customers=[
    {id:1, firstName:'Sagar', lastName:'kattel'},
    {id:2, firstName:'Hello', lastName:'Hi'}
  ];
  res.json(customers);
})
const port =5000;
app.listen(process.env.PORT||port,()=>console.log(`Server is running at port ${port}`));
