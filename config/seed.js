const connection = require('./connection')
const fs = require('fs')

const dataGuru = JSON.parse(fs.readFileSync('./data/guru.json', 'utf-8')).map((guru) => {
  return `('${guru.first_name}', '${guru.last_name}', '${guru.email}', '${guru.gender}')`
})

const insertDataGuru = `INSERT INTO "guru" (first_name, last_name, email, gender) VALUES ${dataGuru.join(',\n')}`

const dataMurid = JSON.parse(fs.readFileSync('./data/murid.json', 'utf-8')).map((murid) => {
  return `('${murid.first_name}', '${murid.last_name}', '${murid.email}', '${murid.gender}', '${murid.birth_date}')`
})

const insertDataMurid = `INSERT INTO "murid" (first_name, last_name, email, gender, birth_date) VALUES ${dataMurid.join(',\n')}`

const dataSubject = JSON.parse(fs.readFileSync('./data/subject.json', 'utf-8')).map((subject) => {
  return `('${subject.nama_pelajaran}')`
})

const insertDataSubject = `INSERT INTO "subject" (nama_pelajaran) VALUES ${dataSubject.join(',\n')}`

connection.query(insertDataGuru, (err, res) => {
  if (err) console.log(err)
  else {
    console.log('data telah dimasukkan kedalam tabel guru')
    connection.query(insertDataMurid, (err, res) => {
      if (err) console.log(err)
      else{
        console.log('data telah dimasukkan kedalam tabel murid')
        connection.query(insertDataSubject, (err, res) => {
          if (err) console.log(err)
          else {
            console.log('data telah dimasukkan kedalam tabel subject')
          }
        })
      }
    })
  }
})