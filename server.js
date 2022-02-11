const { response } = require('express')
const connection = require('./config/connection')
const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const apiRouter = require('express').Router()
const v1 = require('express').Router()

app.use("/api", apiRouter)
apiRouter.use("/v1", v1)

app.get('/', (req, res) => {
  res.render('home')
})

//Guru
app.get('/guru', (req, res) => {
  let queryGetDataGuru = 'SELECT * FROM "guru" ORDER BY "id"'
  connection.query(queryGetDataGuru, (err, response) =>{
    if (err) console.log(err)
    else {
      data = response.rows
      res.render('guru')
    }
  })
})

app.get('/tambahguru', (req, res) => {
  res.render('guru/add-form.ejs')
})

app.get('/guru/edit/:id', (req, res) => {
  let id = Number(req.params.id)
  let queryFindGuruById = `SELECT * FROM "guru" WHERE "id" = $1`
  let values = [id]
  connection.query(queryFindGuruById, values, (err, response) => {
    if (err) console.log(err)
    else {
      let data = {
        id: response.rows[0].id,
        first_name: response.rows[0].first_name,
        last_name: response.rows[0].last_name,
        email: response.rows[0].email,
        gender: response.rows[0].gender
      }
      res.render("guru/edit-form", {
        data
      })
    }
  })
})

// Murid
app.get('/murid', (req, res) =>{
  let queryGetDataMurid = `SELECT * FROM "murid" ORDER BY "id"`
  connection.query(queryGetDataMurid, (err, response) => {
    if (err) console.log(err)
    else{
      data = response.rows
      res.render('murid')
    }
  })
})

app.get('/tambahmurid', (req, res) => {
  res.render('murid/add-form.ejs')
})

app.get('/murid/edit/:id', (req, res) => {
  let id = Number(req.params.id)
  let queryFindMuridById = `SELECT * FROM "murid" WHERE "id" = $1`
  let values = [id]
  connection.query(queryFindMuridById, values, (err, response) => {
    if (err) console.log(err)
    else {
      let data = {
        id: response.rows[0].id,
        first_name: response.rows[0].first_name,
        last_name: response.rows[0].last_name,
        email: response.rows[0].email,
        gender: response.rows[0].gender,
        birth_date: response.rows[0].birth_date
      }
      res.render("murid/edit-form", {
        data
      })
    }
  })
})

//Subject
app.get('/subject', (req, res) =>{
  let queryGetdataSubject = `SELECT * FROM "subject" ORDER BY "id"`
  connection.query(queryGetdataSubject, (err, response) =>{
    if (err) console.log(err)
    else{
      data = response.rows
      res.render('subject')
    }
  })
})

app.get('/tambahsubject', (req, res) => {
  res.render('subject/add-form.ejs')
})

app.get('/subject/edit/:id', (req, res) => {
  let id = Number(req.params.id)
  let queryFindSubjectById = `SELECT * FROM "subject" WHERE "id" = $1`
  let values = [id]
  connection.query(queryFindSubjectById, values, (err, response) => {
    if (err) console.log(err)
    else {
      let data = {
        id: response.rows[0].id,
        nama_pelajaran: response.rows[0].nama_pelajaran,
      }
      res.render("subject/edit-form", {
        data
      })
    }
  })
})

//Backend
//Guru
v1.post('./tambahguru', (req, res) =>{
  let newData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
  }
  let query = `INSERT INTO "guru" (first_name, last_name, email, gender) VALUES ($1, $2, $3, $4)`
  let values =  [newData.first_name, newData.last_name, newData.email, newData.gender]
  connection.query(query, values, (err, response) => {
    if (err) console.log(err)
    else {
      res.redirect('/guru')
    }
  })
})

app.post("/guru/edit/:id", (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  let updatedData = {
    id: Number(req.params.id),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
  }
  let queryUpdateDataGuru = `
    UPDATE "guru" SET
    first_name = $1,
    last_name = $2,
    email = $3,
    gender = $4
    WHERE id = $5
  `
  let values = [updatedData.first_name, updatedData.last_name, updatedData.email, updatedData.gender, updatedData.id]
  connection.query(queryUpdateDataGuru, values, (err, response) => {
    if (err) console.log(err)
    else {
      res.redirect("/guru")
    }
  })
})


//Murid
v1.post('/tambahmurid', (req, res) => {
  let newData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    birth_date: req.body.birth_date,
  }
  let query = `INSERT INTO "murid"(first_name, last_name, email, gender, birth_date) VALUES ($1, $2, $3, $4, $5)`
  let values = [newData.first_name, newData.last_name, newData.email, newData.gender, newData.birth_date]
  connection.query(query, values, (err, response) => {
    if (err) console.log(err)
    else {
      res.redirect('/murid')
    }
  })
})

app.post("/murid/edit/:id", (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  let updatedData = {
    id: Number(req.params.id),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    birth_date: req.body.birth_date,
  }
  let queryUpdateDataMurid = `
    UPDATE "murid" SET
    first_name = $1,
    last_name = $2,
    email = $3,
    gender = $4,
    birth_date = $5
    WHERE id = $6
  `
  let values = [updatedData.first_name, updatedData.last_name, updatedData.email, updatedData.gender, updatedData.birth_date, updatedData.id]
  connection.query(queryUpdateDataMurid, values, (err, response) => {
    if (err) console.log(err)
    else {
      res.redirect("/murid")
    }
  })
})

//Subject
v1.post('/tambahsubject', (req, res) => {
  let newData = {
    nama_pelajaran: req.body.nama_pelajaran,
  }
  let query = `INSERT INTO "subject"(nama_pelajaran) VALUES ($1)`
  let values = [newData.nama_pelajaran]
  connection.query(query, values, (err, response) => {
    if (err) console.log(err)
    else {
      res.redirect('/subject')
    }
  })
})

app.post("/subject/edit/:id", (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  let updatedData = {
    id: Number(req.params.id),
    nama_pelajaran: req.body.nama_pelajaran,
  }
  let queryUpdateDataSubject = `
    UPDATE "subject" SET
    nama_pelajaran = $1
    WHERE id = $2
  `
  let values = [updatedData.nama_pelajaran, updatedData.id]
  connection.query(queryUpdateDataSubject, values, (err, response) => {
    if (err) console.log(err)
    else {
      res.redirect("/subject")
    }
  })
})

app.listen(PORT, () => {
  console.log(`connected to port http://localhost:3000`)
})