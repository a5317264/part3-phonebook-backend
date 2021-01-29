const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Do nothing')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://a5317264:${password}@cluster0.tomrx.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

const personScheme = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personScheme)

// Select and show all persons when arguments === 3
if (process.argv.length === 3) {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
}

// Save person if arguments === 5
if (process.argv.length === 5) {

  const name = process.argv[3]
  const number = process.argv[4]
  const person = new Person({
    name,
    number
  })

  person.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}

