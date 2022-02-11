const connection = require('./connection')

// query untuk bikin tabel guru
const createTableGuru = `
  CREATE TABLE IF NOT EXISTS "guru"(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR(50) NOT NULL,
    gender VARCHAR(15) NOT NULL
  );
`

// query untuk bikin tabel murid
const createTableMurid = `
  CREATE TABLE IF NOT EXISTS "murid"  (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR(50) NOT NULL,
    gender VARCHAR(15) NOT NULL,
    birth_date VARCHAR(20) NOT NULL
  )
`

// query untuk bikin tabel pelajaran
const createTableSubject = `
  CREATE TABLE IF NOT EXISTS "subject" (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nama_pelajaran VARCHAR NOT NULL
  )
`

connection.query(createTableGuru, (error, result) => {
  if (error) console.log(error)
  else {
    console.log('Table Guru berhasil dibuat')
    connection.query(createTableMurid, (error, result) => {
      if (error) console.log(error)
      else {
        console.log('Table Murid berhasil dibuat')
        connection.query(createTableSubject, (error, result) => {
          if(error) console.log(error)
          else{
            console.log('tabel pelajaran berhasil dibuat')
          }
        })
      }
    })
  }
})