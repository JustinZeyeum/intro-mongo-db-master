const mongoose = require('mongoose')

const connect = () => {
   return mongoose.connect('mongodb://localhost:27017/whatever')
}

const student = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    faveFoods: [{type: String}],
    info: {
        school: {
            type: String
        },
        shoeSize: {
            type: Number
        }
    }
})

const Student = mongoose.model('student', student)

connect()
   .then(async connection => {
       const student = await Student.create({firstName: 'Tim'})
       const found = await Student.find({firstName: 'thi'})
       const foundById = await Student.findById('asdfsdfdsf')
       const updated = await Student.findByIdAndUpdate('sadfsdf',{})
       console.log(student)
    })
    .catch(e => console.error(e))