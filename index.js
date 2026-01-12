const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(express.json())
const cors = require('cors')
app.use(cors())
app.use(express.static('dist'))

morgan.token('body', function getBody(req) {
  return req.body ? JSON.stringify(req.body) : "-";
})
app.use(morgan(':method :url :body :response-time'))


let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

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
     const person = persons.find(person => person.id == id)
     if (person){
        response.json(person)
     }else{
        response.status(404).send({ error: 'person not found' });
     }
  
})


const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(p => p.id))
    : 0
  return maxId + 1
}

app.post('/api/persons', (request, response) => {
  const body = request.body;
    
  if (!body.name) 
  {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }
  else if (!body.number) 
  {
    return response.status(400).json({ 
      error: 'number missing' 
    })
  }
  else if(persons.find(person => person.name.toLowerCase() === body.name.toLowerCase()))
  {
    return response.status(400).json({ 
      error: 'User alredy added to the phonebook' 
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person);
  response.json(person)
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