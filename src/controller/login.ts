import { Request, Response } from "express"

interface iGet{
    route: string
}

class Login {

    get(req: Request, res: Response) {
        return res.json({route: "login from controller"})
    }
}

export default Login