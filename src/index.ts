'use strict'
import express, { Application, Request, Response } from 'express'
import http from 'http'
import cors from 'cors'
import { Server, Socket } from 'socket.io'
const app: Application = express()
const server: http.Server = http.createServer(app)
const io: Server = new Server(server)

app.use(express.json())
app.use(cors())

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

server.listen(5000, () => {
  console.log('Serve is running on port 5000')
})
