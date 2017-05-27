//const MongoClient=require(`mongodb`).MongoClient;

const {MongoClient}=require(`mongodb`);

MongoClient.connect(`mongodb://localhost:27017/TodoApp`,(err,db) =>{
  if (err) {
    return console.log(`unable to connect to mongodb server`);
  }
 console.log('connected to mongodb server');
 //
 // db.collection('Todos').insertOne({
 //   text:`something to do`,
 //   complted:false
 // },(err,result) =>{
 //    if (err) {
 //        return console.log('unabe  to insert to todo');
 //    }
 //    console.log(JSON.stringify(result.ops,undefined,2));
 // })

 db.collection('Users').insertOne({
   name: `Govind Mali`,
   age:26,
   location:'mumbai'
 },(err,result)=>{
   if (err) {
      return console.log('unable to insert to Users');
   }
   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
 });



 db.close();

});
