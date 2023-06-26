import axios from "axios";
import { Request, Response } from "express"

class OpenAI {

    async post(req: Request, res: Response) {
        try {
            const URL = 'https://api.openai.com/v1/chat/completions';
            const question = req.body.question

            const response = await axios.post(URL, {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant that provides any information.' },
                    { role: 'user', content: question }
                ],
                temperature: 0.9,
                max_tokens: 1024
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });

            return res.json({response: response.data})
        }
        catch (error: any) {
            return res.json({error});
        }
    }

    async image(req: Request, res: Response) {
        try {
            const URL = 'https://api.openai.com/v1/images/generations';
            const question = req.body.question

            const response = await axios.post(URL, {
                prompt: question,
                n: 2,
                size: "1024x1024",
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });

            return res.json({response: response.data})
        }
        catch (error: any) {
            return res.json({error});
        }
    }
}

export default OpenAI