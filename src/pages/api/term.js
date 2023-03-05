import prisma from "../../lib/prisma"
import Cors from 'cors'
import { runMiddleware } from "@/utils/cors"

export default async function handler(req, res) {
    const cors = Cors({
        methods: ['GET', 'PUT'],
    })
    await runMiddleware(req, res, cors)

    if (req.method === "PUT") {
        res.status(200).json({
            data: await prisma.termAndCondition.update({
                where: {
                    id: 0
                },
                data: {
                    description: req.body.description
                }
            })
        })
    }

    if (req.method === "GET") {
        res.status(200).json(
            await prisma.termAndCondition.findUnique({
                where: {
                    id: 0
                },
            })
        )
    }
}
