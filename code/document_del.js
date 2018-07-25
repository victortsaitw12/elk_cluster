const client = require('./connection');

client.delete({
  index: 'gov',
   id: '1',
   type: 'contituencies'
}, (err, rsp, status) => {
  console.log(rsp);  
});
