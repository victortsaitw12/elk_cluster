const client = require('./connection');
client.indices.create({
  index: 'gov'
}, function(err, rsp, status){
  if(err){
    console.log(err);
  } else {
    console.log('create', rsp);
  }
});
