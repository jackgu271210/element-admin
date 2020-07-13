const sd = require('silly-datetime')
const time = sd.format(new Date(), 'YYYY-MM-DD HH:mm')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-jack', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
const Article = mongoose.model('Article', new mongoose.Schema({
    id: { type: Number },
    title: { type: String },
    category: { type: String },
    body: { type: String },
    time: { type: String, default: time }
}, { timestamps: { createdAt: 'created', updateAt: 'updated' } }))

const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String, unique: true },
    password: {
        type: String,
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        }
    },
    phone: { type: String },
    mail: { type: String }
}, { timestamps: { createdAt: 'created', updateAt: 'updated' } }))


module.exports = { Article, User }