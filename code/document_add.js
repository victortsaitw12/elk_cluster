const client = require('./connection');

client.index({
  index: 'gov',
  id: '1',
  type: 'contituencies',
  body: {
    "ConstituencyName": "Ipswich",
    "ConstituencyID": "E14000761",
    "ConstituencyType": "Borough",
    "Electorate": 74499,
    "ValidVotes": 48694,
  }
}, function(err, rsp, status){
  console.log(rsp);  
});
