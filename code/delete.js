const client = require('./connection');
client.indices.delete({
  index: 'gov'
}, (err, rsp, status) => {
  console.log('delete', rsp);  
});
