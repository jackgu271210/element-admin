const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-ui', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
const Article = mongoose.model('Article', new mongoose.Schema({
    id: { type: Number },
    title: { type: String },
    category: { type: String },
    body: { type: String },
    time: { type: String }
}))

const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    rePassword: { type: String },
    realname: { type: String }
}))


module.exports = { Article, User }