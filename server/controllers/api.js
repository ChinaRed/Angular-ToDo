var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');
var ObjectId = require("mongoose").Types.ObjectId;

// list all todos
router.get('/', function (req, res) {
  Todo.find ( function (err, todos){
    if (err) throw err;
    res.json( todos );
  });
});


// add todo
router.post('/', function (req, res){
  Todo.create({ title : req.body.title}, function (err, todo){
    if (err) throw err;
    res.json( todo );
  });
});

// delete todo
router.delete('/:id', function (req, res){
  console.log(req.params.id);
  Todo.findById(req.params.id)
    .remove()
    .exec(function (err, num_removed, status){
    if (err) throw err;
    res.json( status ); //this is the todo that was removed
  });
});

// complete todo
router.put('/:id/complete', function (req, res){
  Todo.update({ _id : ObjectId(req.params.id)}, 
    { 
      $set : {
        completed : true
      }
    }, function (err, update_count, result){
      if (err) throw err;
      res.json( result ); // this is the todo that was updated
    });
});

// uncomplete todo
router.put('/:id/uncomplete', function (req, res){
  Todo.update(req.params.id, 
  {
    $set : {
      completed : false
    }
  }, function (err, update_count, result){
    if (err) throw err;
    res.json( result ); // todo that is waiting to be updated
  });
});

module.exports = router;