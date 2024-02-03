'use strict'
import express, { Application, Request, Response } from 'express'

const app = express()

let name: string = 'yashwant'

app.get(
  '/home',
  async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json({ message: 'we are going all well' })
  },
)

app.listen(3000, (): void => {
  console.log('server started at port 3000')
})
