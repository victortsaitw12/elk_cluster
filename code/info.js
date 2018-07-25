const client = require('./connection');

client.cluster.health({}, (err, rsp, status) => {
  console.log("Client Health:", rsp);  
});

client.count({ 
  index: 'gov',
  type: 'constituencies'
}, (err, rsp, status) => {
  console.log('consituencies', rsp);  
});
