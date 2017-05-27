const expect =requrire('expect');
const request=require('supertest');

const {app}=require('./../server');
const {Todo}=require('./../models/todo');

describe('POST /todos',()=>{
	it('Should create new todo',(done)=>{
		var text ='test to do text';

		request(app)
			.post('/todos')
			.send({text})
			.expect(200)
	})	
}); 