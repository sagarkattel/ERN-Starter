var express=require('express');
const app=express();
app.get('/api/customers',(req,res)=>{
  const customers=[
    {id:1, firstName:'Sagar', lastName:'kattel'},
    {id:2, firstName:'Hello', lastName:'Hi'}
  ];
  res.json(customers);
})
const port =5000;
app.listen(port,()=>console.log(`Server is running at port ${port}`));
