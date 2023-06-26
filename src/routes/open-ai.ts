import express from "express";
import OpenAI from "../controller/openai";


const OpenAIRoutes = express.Router()

const open_ai = new OpenAI()

OpenAIRoutes.post('/', (req, res) => {
    open_ai.post(req, res)
})

OpenAIRoutes.post('/image', (req, res) => {
    open_ai.image(req, res)
})

export default OpenAIRoutes