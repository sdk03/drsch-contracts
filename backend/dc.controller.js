const dcRepository = require('./dc.repository');


exports.getAllData = (req,res) =>{
  console.log('GETTING ALL DATA')

  let pass = req.body.pass;
  
  dcRepository.getAllData(pass).then((result) => {

    if(result){res.send(result)}

  }).catch((error) =>{
    res.send(error)
  })

 }

 
exports.getAllRemarks = (req,res) =>{
  console.log('GETTING ALL REMARKS')

  let pass = req.body.pass;
  
  dcRepository.getAllRemarks(pass).then((result) => {

    if(result){res.send(result)}

  }).catch((error) =>{
    res.send(error)
  })

 }
