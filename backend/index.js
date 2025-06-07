import express from 'express'
import cors from 'cors'
import jobsData from './data/jobsData.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/new',(req,res)=>{
    jobsData.push(req.body)
    res.send("Sucess")
    console.log("sucess")
})

app.get('/jobs',(req,res)=>{
    res.send(jobsData)
    console.log("sucess")
})


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server started")
})
