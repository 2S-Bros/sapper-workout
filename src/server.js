import sirv from "sirv"
import express from "express"
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import { resolve } from 'path'
config({ path: resolve(__dirname, './.env') })
import { db } from './server/config/mongoose'
import { apolloServer } from './server/graphql/index'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import compression from "compression"
import * as sapper from "@sapper/server"

db()

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === "development"

const app = express()

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:3000',
}

app.use(cors(corsOptions))

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use((req, res, next) => {
  const { token } = req.cookies
  if (token) {
    try {
      const jwtRes = jwt.verify(token, process.env.JWT_SECRET)
      req.useId = jwtRes.id
      req.username = jwtRes.username
    } catch {
      req.userId = null
      req.username = null
    }
  }
  next()
})

apolloServer.applyMiddleware({
  app,
  cors: corsOptions,
  path: '/graphql',
})

app.get('/api/hello', (req, res) => {
  res.send('Hello friend')
})

app.use(
  compression({ threshold: 0 }),
  sirv("static", { dev }),
  sapper.middleware()
)

app.listen(PORT, err => {
  if (err) console.log("error", err)
  console.log(`Apollo Server on http://localhost:${PORT}/graphql`)
})
