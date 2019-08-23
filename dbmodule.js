const mongojs = require('mongojs');

//connect to the database
const db = mongojs('definitionOfDone');
db.on('error', (err) => {
    console.log(err.message);
})
db.on('connect', () => {
    console.log('database connected');
});

module.exports.getTodo = (res) => {
    db.todocollections.find({}, (err, docs) => {
        if(err || !docs){
            console.log('failure');
        }else if(docs.length==0){
            console.log('failure');
        }else {
            res.render('checklist', {doc: docs});
        }
    });
}
module.exports.addTodo = (task,res) => {
    db.todocollections.insert({'task':task}, (err,docs) => {
        if(docs.nInserted==0){
            console.log('insert failed');
        }else{
            res.redirect('/checklist');
        }
    });
}

















