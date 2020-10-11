require('../src/db/mongoose')
const User = require('../src/models/user')

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age})
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f562427b5e94209fc9989c4', 1).then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})