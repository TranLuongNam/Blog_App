
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import posts from "./routers/posts.js"
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.port || 5000
const URI =
    'mongodb+srv://admin:admin1010@cluster0.bcprl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cors())

app.use('/posts', posts)

mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log('err', err);
    })



/*
* Express : tạo các routing cho ứng dụng.
* Mongoose : tạo các model cho database.
* Các middleWare : body-parser cors ,nodemon(giúp chúng ta không cần phải khởi động server khi có sự thay đổi trong file js).
========================= SETUP =============================
* Setup file and packages,libs on Client
* Setup file and packages,libs on Server
* router
* controllers
* models
*/