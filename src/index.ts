'use strict'
import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.use(express.json())

let name: string = 'yashwant'

app.get(
  '/home',
  async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json()
  },
)

app.listen(5000, (): void => {
  console.log('server started at port 3000')
})

/*
   "start": "npm run build && node build/index.js",
    "start:dev": "npx nodemon",
    "build": "rimraf ./build && tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
*/
