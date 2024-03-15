'use strict'
import express, { Application, Request, Response } from 'express'
import http from 'http'
import cors from 'cors'
import { Server, Socket } from 'socket.io'

const app: Application = express()
const server: http.Server = http.createServer(app)
const io: Server = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
})

const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

app.use(express.json())
app.use(cors(corsOptions)) // Enable CORS for all routes

interface dataType {
  user: string
  message: string
}

io.on('connection', (socket: Socket) => {
  console.log('user connected')

  socket.on('message', (data: dataType) => {
    console.log(data)
    io.emit('message', data)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

app.get(
  '/home',
  async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json({ message: 'we are hitting' })
  },
)

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
})

server.listen(5000, () => {
  console.log('Server is running on port 5000')
})
