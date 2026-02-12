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
  response.json(persons)
})

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})


app.get('/info', (request, response) => {
 let personsCounter = persons.length;
 const now = new Date().toString();
 const html =  '<p>Phonebook has info for ' + personsCounter + ' people</p>' + '<p>' + now + '</p>';
  response.send(html)
})


app.get('/api/persons/:id', (request, response) => {
     const id = request.params.id;
   /*  const person = persons.find(person => person.id == id)
     if (person){
        response.json(person)
     }else{
        response.status(404).send({ error: 'person not found' });
     }*/
    Persons.findById(request.params.id).then(note => {
    response.json(person)
  })
  
})


const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(p => p.id))
    : 0
  return maxId + 1
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number missing' 
    })
  }

  // 1. Creamos una instancia del modelo 'Persons' (el que importaste arriba)
  // Nota: Usamos 'const person' en singular para no confundir con el Modelo
  const person = new Persons({
    name: body.name,
    number: body.number,
  
  })

  // 2. Guardamos en la base de datos
  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
  .catch(error => {
    console.log(error)
    response.status(500).send({ error: 'failed to save to database' })
  })
})


app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})