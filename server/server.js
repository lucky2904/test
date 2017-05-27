var express=require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require('mongodb');


var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {user}=require('./models/user');

var app=express();

const port =process.env.PORT || 4000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	console.log(req.body);
	
	var todo=new Todo({
		text:req.body.text
	})
	
	todo.save().then((doc)=>{
		res.status(200).send(doc);
	},(e)=>{
		res.status(400).send(e);
	})
});

app.get('/todos',(req,res)=>{
	Todo.find().then((todos)=>{
		res.status(200).send({todos});
	},(e)=>{
		res.status(400).send(e);
	})
})


app.get('/todos/:id',(req,res)=>{
	console.log(req.params.id);
	var id=req.params.id;
	
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}
	
	Todo.findById(id).then((todo)=>{
		if(!todo){
			return req.status(404).send();
		}
		
		res.status(200).send({todo});
		
	}).catch((e)=>{
		res.status(400).send();
	})	
});
app.listen(port,()=>{
	console.log(`Started up on the port ${port}`);
})


module.exports={app};
