const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');

var id='59282b4e9511bb1f70fceca0';

Todo.find({
	_id:id
}).then((todos)=>{
	 console.log('Todos',todos);
},(e)=>{
	console.log('error',e);	
});

Todo.findOne({
	_id:id
}).then((todo)=>{
	 console.log('Todo',todo);
},(e)=>{
	console.log('error',e);	
});

Todo.findById(id).then((todo)=>{
	 console.log('Todo by Id',todo);
},(e)=>{
	console.log('error',e);	
});