const db = require('./db');

const SECURE_PASS = 'germany-uae-3227'

// GET ALL CONTRACT DATA
exports.getAllData = (pass) => {

  return new Promise((resolve,reject) => {

    const query = `SELECT * FROM contracts`

    if(pass === SECURE_PASS){

        db.query(query, (error,result) => {
            if(error){reject(error)}
            else{
              if(result.length === 0 ){reject('No Data Found')}
              else{
                resolve(result)
              }
            }
          })

    }else{
        reject('ERROR: PASS')
    }

   

  })

}

// GET ALL CONTRACT REMARKS
exports.getAllRemarks = (pass) => {

  return new Promise((resolve,reject) => {

    const query = `SELECT * FROM remarks`

    if(pass === SECURE_PASS){

        db.query(query, (error,result) => {
            if(error){reject(error)}
            else{
              if(result.length === 0 ){reject('No Data Found')}
              else{
                resolve(result)
              }
            }
          })

    }else{
        reject('ERROR: PASS')
    }

   

  })

}

// -----------------------------------------------

// ADD NEW REMARK 
exports.addNewRemark = (pass,cdb_id,remarks,remarks_header) => {

  return new Promise((resolve,reject) => {

    const query = `INSERT INTO remarks(cdb_id,remarks_header,remarks) VALUES ('${cdb_id}','${remarks}','${remarks_header}')`

    if(pass === SECURE_PASS){

        db.query(query, (error,result) => {
            if(error){reject(error)}
            else{
              if(result.affectedRows === 0 ){reject('No Data Added')}
              else{
                resolve(result)
              }
            }
          })

    }else{
        reject('ERROR: PASS')
    }

   

  })

}


//UPDATE REMARK
exports.updateRemark = (pass,remarks_id,remarks,remarks_header) => {

  return new Promise((resolve,reject) => {

    const query = `UPDATE remarks SET remarks_header='${remarks_header}',remarks='${remarks}' WHERE remarks_id = '${remarks_id}'`

    if(pass === SECURE_PASS){

        db.query(query, (error,result) => {
            if(error){reject(error)}
            else{
              if(result.affectedRows === 0 ){reject('No Data Updated')}
              else{
                resolve(result)
              }
            }
          })

    }else{
        reject('ERROR: PASS')
    }

   

  })

}


//DELETE REMARK
exports.deleteRemark = (pass,remarks_id) => {

  return new Promise((resolve,reject) => {

    const query = `DELETE FROM remarks WHERE remarks_id = '${remarks_id}'`

    if(pass === SECURE_PASS){

        db.query(query, (error,result) => {
            if(error){reject(error)}
            else{
              if(result.affectedRows === 0 ){reject('No Data Deleted')}
              else{
                resolve(result)
              }
            }
          })

    }else{
        reject('ERROR: PASS')
    }

   

  })

}

// ------------------------------------------

//ADD NEW CONTRACT
exports.addNewContract = (pass,dataArray) => {

  return new Promise((resolve,reject) => {
    

    const query = `INSERT INTO contracts(project_id, project_name, first_party, second_party, project_location, template, type, scope, arn, agreement, contact, contact_ext, director) 
    VALUES ('${dataArray.pid}','${dataArray.pn}','${dataArray.fp}','${dataArray.sp}','${dataArray.pl}','${dataArray.tem}','${dataArray.typ}','${dataArray.scp}','${dataArray.arn}','${dataArray.agr}','${dataArray.con}','${dataArray.ext}','${dataArray.dir}')`

    if(pass === SECURE_PASS){

        db.query(query, (error,result) => {
            if(error){reject(error)}
            else{
              if(result.affectedRows === 0 ){reject('No Data Added')}
              else{
                resolve(result)
              }
            }
          })

    }else{
        reject('ERROR: PASS')
    }

   

  })

}

//UPDATE CONTRACT
exports.updateContract = (pass,db_id,dataArray) => {

  return new Promise((resolve,reject) => {



    const query = `UPDATE contracts SET project_id='${dataArray.pid}',project_name='${dataArray.pn}',first_party='${dataArray.fp}',second_party='${dataArray.sp}',project_location='${dataArray.pl}',template='${dataArray.tem}',type='${dataArray.typ}',scope='${dataArray.scp}',arn='${dataArray.arn}',agreement='${dataArray.agr}',contact='${dataArray.con}',contact_ext='${dataArray.ext}',director='${dataArray.dir}' WHERE db_id='${db_id}'`

    if(pass === SECURE_PASS){

        db.query(query, (error,result) => {
            if(error){reject(error)}
            else{
              if(result.affectedRows === 0 ){reject('No Data Updated')}
              else{
                resolve(result)
              }
            }
          })

    }else{
        reject('ERROR: PASS')
    }

   

  })

}


//DELETE CONTRACT
exports.deleteContract = (pass,db_id) => {

  return new Promise((resolve,reject) => {

    const query = `DELETE FROM contracts WHERE db_id = '${db_id}'`

    if(pass === SECURE_PASS){

        db.query(query, (error,result) => {
            if(error){reject(error)}
            else{
              if(result.affectedRows === 0 ){reject('No Data Deleted')}
              else{
                resolve(result)
              }
            }
          })

    }else{
        reject('ERROR: PASS')
    }

   

  })

}