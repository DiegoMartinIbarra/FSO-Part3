const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(express.json())
const cors = require('cors')
app.use(cors())
app.use(express.static('dist'))
require('dotenv').config()
const Persons = require('./models/persons')

morgan.token('body', function getBody(req) {
  return req.body ? JSON.stringify(req.body) : "-";
})
app.use(morgan(':method :url :body :response-time'))

app.get('/api/persons', (request, response) => {
  Persons.find({}).then(result => {
    response.json(result)
  }).catch(error => {
      console.log(error)
      response.status(400).send({ error: 'error getting the persons list' })
    })
})

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})


app.get('/info', (request, response) => {
 let personsCounter = persons.length;
 const now = new Date().toString();
 const html =  '<p>Phonebook info</p>' + '<p>' + now + '</p>';
  response.send(html)
})


app.get('/api/persons/:id', (request, response) => {
     const id = request.params.id;
    Persons.findById(request.params.id).then(result => {
    response.json(person)
  }).catch(error => {
      console.log(error)
      response.status(400).send({ error: 'error getting the person' })
    })
  
})


app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number missing' 
    })
  }
//creo una instancia del schema
  const person = new Persons({
    name: body.name,
    number: body.number,
  
  })
//Guardo los datos en la bd
  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
  .catch(error => {
    console.log(error)
    response.status(500).send({ error: 'failed to save in database' })
  })
})


app.delete('/api/persons/:id', (request, response, next) => {
  const id = request.params.id

  Persons.findByIdAndDelete(id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'error deleating the person' })
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})