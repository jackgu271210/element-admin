const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()



const crypto = require('crypto')

const { Article, User } = require('./model.js')

const SECRET = 'qwe8iahsfasdhasidasdh'


app.use(express.json())
app.use(require('cors')())


app.get('/', async (req, res) => {
    res.send('Hello')
})

// 注册用户
app.post('/api/register', async(req, res) => {
    const user = await User.create(req.body)
    res.send(user)
})

// 用户登陆
app.post('/api/login', async(req, res) => {
    const user = await User.findOne({
        username: req.body.username
    })
    if (!user) {
        return res.status(422).send({
            msg: '用户名不存在'
        })
    }
    const isPasswordValid = require('bcrypt').compareSync(
        req.body.password,
        user.password
    )
    if (!isPasswordValid) {
        return res.status(423).send({
            msg: '密码无效'
        })
    }
    // 生成token
    const token = jwt.sign({
        id: String(user._id)
    }, SECRET)
    res.send({
        user,
        token: token
    })
})

// 新建公司信息
app.post('/api/company', async (req, res) => {
    const company = await Company.create(req.body)
    res.send(company)
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


// 新建管理员
app.post('/api/user', async (req, res) => {
    const user = await User.create(req.body)
    res.send(user)
})
// 管理员列表
app.get('/api/user', async (req, res) => {
    const user = await User.find()
    res.send(user)
})
app.listen(3000, () => {
    console.log('http://localhost:3000/')
})