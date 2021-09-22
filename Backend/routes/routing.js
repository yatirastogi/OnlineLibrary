var express = require('express');
const app=express()
const mongoose = require('mongoose');

var m="";
const URI="mongodb+srv://rastogi_yati:Yati12345@cluster0.dokcw.mongodb.net/express?retryWrites=true&w=majority"
mongoose.connect(URI, {});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});
const router=express.Router()


const schema = new mongoose.Schema({ name: 'string', email: 'string' ,password:'string',district:'string',state:'string'});//DETAILS OF NEW USERS
const CreateSchema = mongoose.model('newuser', schema);
const schema1 = new mongoose.Schema({ title: 'string', price: 'string',bookid:'string',district:'string',state:'string'});// DATABSE FOR DETAILS OF UPLOADED BOOKS
const CreateSchema1=mongoose.model('books',schema1);
const schema2 = new mongoose.Schema({name: 'string', books:'array'});
const CreateSchema2=mongoose.model('carts',schema2);
var p="";
router.post('/upload', (req, res) => {
 //to generate random id 
//let ch='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let ch=String.fromCharCode(Math.floor(1+Math.random())*5);
for(var i=0;i<5;i++){
  p=p+""+String.fromCharCode(Math.floor(1+Math.random())*5);
}


if(req.session.name!=""){
CreateSchema.find({name:req.session.name}, function (err, docs) {
if (err) return handleError(err); 
else
{//scema else open
const b=Object.keys(docs).length;
if(b!=0)
{//if inside else open
const dist=docs[0]['district'];
const stat=docs[0]['state'];
CreateSchema1.create({ title: req.body.title,price:req.body.price,district:dist,state:stat,bookid:(Math.random().toString(36).substr(2,9))}, function (err, docs) {
  if (err) return handleError(err);
  });
  
    res.send('Uploaded Succesfully by'+req.session.name)
    
//res.send('done')
//res.render('welcome',{name:docs[0]['name']});

//res.render('incorrect')
}//if inside else closes
else
res.send("Please Login to Upload");
}//else close
}); //schema closes 
}

});//close upload post request












router.get('/', (req, res) => {
    res.render('index')
  })
  router.post('/oo', (req, res) => {

    res.send(req.session.name)
  })

  router.post('/logout', (req, res) => {
   req.session.name="";
   res.send("loggedout")
  })


  router.post('/login', (req, res) => {
    CreateSchema.find(
      {email:req.body.email,password:req.body.password}, function (err, docs) {
  if (err) return handleError(err);
  else
  {
    const b=Object.keys(docs).length;

    if(b!=0)
   {
     req.session.name=docs[0]['name'];
    m=docs[0]['name'];
    res.send(req.session.name);

  }
    //res.render('welcome',{name:docs[0]['name']});
    else

    {
      req.session.name="";
      m="";
      res.send("wrong");
}


  }})
})


  // router.get('/create', (req, res) => {

  //   res.render('create')
  // })

  router.post('/createsub', (req, res) => {

    CreateSchema.find({ name: req.body.name}, function (err, findname) {
      if (err) return handleError(err);
      else{//when no error in finding name
        CreateSchema.find({ email: req.body.email}, function (err, findemail) {
          if (err) return handleError(err);
          else{ 



       
        if(findname.length==0 && findemail.length==0){//if username not exists

    CreateSchema.create({ name: req.body.name,email:req.body.email,password:req.body.password,state:req.body.Account_State,district:req.body.district }, function (err, docs) {
    if (err) return handleError(err);
    });
    CreateSchema2.create({ name: req.body.name,books:[], }, function (err, docs) {//FOR CART
      if (err) return handleError(err);
      });
      res.send('Account Created Succesfully')
    }//if username not closes
    
    else if(findname.length>0){
      res.send('Username Exists');
    }
    else{
      res.send('Email Exists')
    }
         }
         })
  
  }
  
  
    
});

  
  })
     router.post('/loginsub', (req, res) => {
      CreateSchema.find(
        {email:req.body.email,password:req.body.password}, function (err, docs) {
    if (err) return handleError(err);
    else
    {
      const b=Object.keys(docs).length;

      if(b!=0)
      res.send("done")
      //res.render('welcome',{name:docs[0]['name']});
      else
      res.send("ff")
      //res.render('incorrect')

    }

    });


   })



router.post('/view',(req,res)=>{
//console.log(req.body.district)
  CreateSchema1.find(
    {state:req.body.statename,district:req.body.district}, function (err, docs) {
if (err) return handleError(err);
else
{
  res.send(docs)
  //res.render('incorrect')
}

});
})
router.post('/viewall',(req,res)=>{
  //console.log(req.body.district)
    CreateSchema1.find(
      {}, function (err, docs) {
  if (err) return handleError(err);
  else
  {
    res.send(docs)
    //res.render('incorrect')
  }
  
  });
  })
  router.post('/viewallofstate',(req,res)=>{
    //console.log(req.body.district)
      CreateSchema1.find(
        {state:req.body.statename}, function (err, docs) {
    if (err) return handleError(err);
    else
    {
      res.send(docs)
      //res.render('incorrect')
    }
    
    });
    })
var p;
router.post('/cartview',(req,res)=>{
  if(typeof req.session.name==='undefined' || req.session.name===""){
    res.send("notlogged");
 
  }
  else{
  CreateSchema2.find({name:req.session.name}, function (err, docs) {if (err) return handleError(err); else


    {
      var det=[];
      let ch=docs[0]['books'];
      if(ch.length!=0){
      let arr=[...new Set(ch)];
      
      const le=arr.length;
      var i=0;
      arr.map((book)=>{
         CreateSchema1.find({bookid:book}, function (err, doc) {if (err) return err; else 
         {
            det.push(doc[0])
            if(i==le-1)
            res.send(det)
            i=i+1
          }  
        })
       })
      }
      else{
        res.send("no")
      }
      // console.log(det)
      
       
    }
  

  });

  }
})



  router.post('/addcart', (req, res) => {
    if(typeof req.session.name==='undefined' || req.session.name===""){
      res.send("notlogged");
   
    }
else{

    const bid=req.body.bookid;
    CreateSchema2.find({name:req.session.name}, function (err, docs) {

      
      
      if (err) return handleError(err); else 
      console.log(docs)});
    CreateSchema2.updateOne(
      {name:req.session.name},{'$push': {books:req.body.bookid}},
      function (err, docs) {
        if (err) return handleError(err);
        //else console.log(docs)
      });
//   CreateSchema1.find(
//     {_id:req.body.bookid}, function (err, docs) {
// if (err) return handleError(err);
// else
// {
//console.log(doc)
//   res.send(docs)
res.send(req.session.name)
    }
}


  )
  router.post('/delcart', (req, res) => {
    const bid=req.body.bookid;
    CreateSchema2.find({name:req.session.name}, function (err, docs) {

      
      
      if (err) return handleError(err); else 
      console.log(docs)});
    CreateSchema2.updateOne(
      {name:req.session.name},{'$pull': {books:req.body.bookid}},
      function (err, docs) {
        if (err) return handleError(err);
        //else console.log(docs)
      });
//   CreateSchema1.find(
//     {_id:req.body.bookid}, function (err, docs) {
// if (err) return handleError(err);
// else
// {
//console.log(doc)
//   res.send(docs)
res.send(req.session.name)

}


  )



  router.get('/home', (req, res) => {
    res.render('home');
  })
  router.post('/form', (req, res) => {
    const schema = new mongoose.Schema({ name: 'string', email: 'string' });
    const Tank = mongoose.model('Tank', schema);
    Tank.create({ name: req.body.username,email:req.body.email }, function (err, small) {
    if (err) return handleError(err);
    });
      res.render('welcome',{name:req.body.username,email:req.body.email})

  })

  router.get('/del', (req, res) => {
    const schema = new mongoose.Schema({ name: 'string', email: 'string' });
    const Tank1 = mongoose.model('Tank', schema);
    Tank1.deleteOne({ name: 'yaya'}, function (err, small) {
    if (err) return handleError(err);
    });
      res.send('deleted')
  })


  router.get('/try', (req, res) => {
    res.send("this is just for delay from express");
  })


  module.exports=router