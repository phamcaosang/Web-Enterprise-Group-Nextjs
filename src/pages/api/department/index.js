import { addDepartment, getAllDepartment } from "@/lib/services/department"
import { runMiddleware } from "@/utils/cors"
import Cors from 'cors'

export default async function handler(req, res) {
    const cors = Cors({
        methods: ['POST', 'GET'],
    })
    await runMiddleware(req, res, cors)

    try {
        if (req.method === "GET") {
            return res.status(200).json(await getAllDepartment())
        }
        if (req.method === "POST") {
            return res.status(200).json(await addDepartment(req.body))
        }
    } catch (err) {
        return res.status(500).json(err)
    }
}
