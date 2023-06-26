import express from "express";
import Login from "../controller/login";


const LoginRoutes = express.Router()

const login = new Login()

LoginRoutes.get('/', (req, res) => {
    login.get(req, res)
})

export {
    LoginRoutes
}