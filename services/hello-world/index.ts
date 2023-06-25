import express, { Express, Request, Response } from 'express'
import serverless from 'serverless-http'

const app: Express = express()

app.get('/', (req: Request, res: Response)=>{
  return res.status(200).json({message: 'Hello world!'})
})

export const handler = serverless(app)