const express = require('express')
const app = express()

app.use(express.json())
app.use(require('cors')())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-ui', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
const Article = mongoose.model('Article', new mongoose.Schema({
    title: { type: String },
    body: { type: String }
}))

app.get('/', async (req, res) => {
    res.send('Hello')
})
// 新建文章
app.post('/api/article', async (req, res) => {
    const article = await Article.create(req.body)
    res.send(article)
})
// 文章列表
app.get('/api/article', async (req, res) => {
    const article = await Article.find()
    res.send(article)
})
// 删除文章
app.delete('/api/article/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status: true
    })
})
// 文章详情
app.get('/api/article/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.send(article)
})
// 修改文章
app.put('/api/article/:id', async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body)
    res.send(article)
})
app.listen(3000, () => {
    console.log('http://localhost:3000/')
})