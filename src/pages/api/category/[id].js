import { deleteCategory, editCategory } from "@/lib/services/category"
import { runMiddleware } from "@/utils/cors"
import Cors from 'cors'

export default async function handler(req, res) {
    const cors = Cors({
        methods: ['PUT', 'DELETE'],
    })
    await runMiddleware(req, res, cors)

    try {
        if (req.method === "PUT") {
            return res.status(200).json(await editCategory(req.query.id, req.body.name))
        }
        if (req.method === "DELETE") {
            return res.status(200).json(await deleteCategory(req.query.id))
        }
    } catch (err) {
        return res.status(500).json(err)
    }
}
