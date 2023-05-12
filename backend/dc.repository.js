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