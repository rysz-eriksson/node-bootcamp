require('../src/db/mongoose')
const Task = require('../src/models/task')

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5f56319e48c82b201c43155b').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
}) 