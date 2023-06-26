import express from "express"
import {LoginRoutes} from "./login"
import OpenAI from "./open-ai";

const routes = express()

routes.get('/', (req, res) => {
    res.json({var: "routes working"});
})

routes.use('/open-ai', OpenAI)
routes.use('/login', LoginRoutes)

export default routes