import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()

// Configure CORS before defining routes
app.use(cors({
    origin: `${process.env.BASE_URL}`,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
import user from './routes/user.js'
import todo from './routes/todo.js'
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My MERN Todo App</h1>');
});
app.use('/user', user)
app.use('/todo', todo)

export default app
