import { deleteDepartmentByID, updateDepartmentByID } from "@/lib/services/department"
import { runMiddleware } from "@/utils/cors"
import Cors from 'cors'

export default async function handler(req, res) {
    const cors = Cors({
        methods: ['PUT', 'DELETE'],
    })
    await runMiddleware(req, res, cors)

    try {
        if (req.method === "PUT") {
            return res.status(200).json(await updateDepartmentByID(req.query.id, req.body))
        }
        if (req.method === "DELETE") {
            return res.status(200).json(await deleteDepartmentByID(req.query.id))
        }
    } catch (err) {
        return res.status(500).json(err)
    }
}
