require('dotenv').config()

const express = require('express')
const session = require('express-session')
const cors = require('cors')
const massive = require('massive')

const authCtrl = require('./controllers/authController')
const tourCtrl = require('./controllers/tourController')

const {
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env

// create app
const app = express()

// tlm
app.use(cors())
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 36000
    }
}))

// set up database
massive(CONNECTION_STRING)
    .then( db => {
        app.set('db', db)
        console.log('db connected')
    })
    .catch( error => {
        console.log(error)
    })


// endpoints
app.post('/api/login', authCtrl.login)
app.post('/api/register', authCtrl.register)
app.put('/api/edit', authCtrl.editPassword)

app.post('/api/tour', tourCtrl.createTour)
app.get('/api/tour', tourCtrl.getTours)
app.put('/api/tour/:id', tourCtrl.editTour)
app.delete('/api/tour/:id', tourCtrl.deleteTour)


app.listen(8080, ()=> {
    console.log('server running')
})