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

//  ------------------------------------

exports.addNewRemark = (req,res) =>{
  console.log('ADDING NEW REMARK')

  let pass = req.body.pass;
  let cdb_id = req.body.cdb_id;
  let remarks = req.body.remarks;
  let remarks_header = req.body.remarks_header;
  
  dcRepository.addNewRemark(pass,cdb_id,remarks,remarks_header).then((result) => {

    if(result){res.send(result)}

  }).catch((error) =>{
    res.send(error)
  })

 }

exports.updateRemark = (req,res) =>{
  console.log('UPDATING REMARK')

  let pass = req.body.pass;
  let remarks_id = req.body.remarks_id;
  let remarks = req.body.remarks;
  let remarks_header = req.body.remarks_header;
  
  dcRepository.updateRemark(pass,remarks_id,remarks,remarks_header).then((result) => {

    if(result){res.send(result)}

  }).catch((error) =>{
    res.send(error)
  })

 }

exports.deleteRemark = (req,res) =>{
  console.log('DELETING REMARK')

  let pass = req.body.pass;
  let remarks_id = req.body.remarks_id;
  
  dcRepository.deleteRemark(pass,remarks_id).then((result) => {

    if(result){res.send(result)}

  }).catch((error) =>{
    res.send(error)
  })

 }

//  ------------------------------------

exports.addNewContract = (req,res) =>{
  console.log('ADDING NEW CONTRACT')

  let pass = req.params.pass;
  let pid = req.body.project_id;
  let pn = req.body.project_name;
  let fp = req.body.first_party;
  let sp = req.body.second_party;
  let pl = req.body.project_location;
  let tem = req.body.template;
  let typ = req.body.type;
  let scp = req.body.scope;
  let arn = req.body.arn;
  let agr = req.body.agreement;
  let con = req.body.contact;
  let ext = req.body.contact_ext;
  let dir = req.body.director;


  let dataArray = {pid:pid,pn:pn,fp:fp,sp:sp,pl:pl,tem:tem,typ:typ,scp:scp,arn:arn,agr:agr,con:con,ext:ext,dir:dir}

  console.log(pass,req.body.project_id)
  
  dcRepository.addNewContract(pass,dataArray).then((result) => {

    if(result){res.send(result)}

  }).catch((error) =>{
    res.send(error)
  })

 }

exports.updateContract = (req,res) =>{
  console.log('UPDATE CONTRACT')

  let db_id = req.body.db_id;
  let pass = req.body.pass;
  let pid = req.body.project_id;
  let pn = req.body.project_name;
  let fp = req.body.first_party;
  let sp = req.body.second_party;
  let pl = req.body.project_location;
  let tem = req.body.template;
  let typ = req.body.type;
  let scp = req.body.scope;
  let arn = req.body.arn;
  let agr = req.body.agreement;
  let con = req.body.contact;
  let ext = req.body.contact_ext;
  let dir = req.body.director;



  let dataArray = {pid:pid,pn:pn,fp:fp,sp:sp,pl:pl,tem:tem,typ:typ,scp:scp,arn:arn,agr:agr,con:con,ext:ext,dir:dir}
  
  dcRepository.updateContract(pass,db_id,dataArray).then((result) => {

    if(result){res.send(result)}

  }).catch((error) =>{
    res.send(error)
  })

 }

exports.deleteContract = (req,res) =>{
  console.log('DELETING CONTRACT')

  let pass = req.body.pass;
  let db_id = req.body.db_id;
  
  dcRepository.deleteContract(pass,db_id).then((result) => {

    if(result){res.send(result)}

  }).catch((error) =>{
    res.send(error)
  })

 }