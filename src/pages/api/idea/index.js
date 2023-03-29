import { addTopic, getAllTopic } from "@/lib/services/topic"
import { runMiddleware } from "@/utils/cors"
import prisma from "../../../lib/prisma"
import Cors from 'cors'

export default async function handler(req, res) {
    const cors = Cors({
        methods: ['POST', "GET"],
    })
    await runMiddleware(req, res, cors)

    try {
        if (req.method === "POST") {
            const { id, category, content, isAnomyous, topic, user } = req.body
            return res.status(200).json(await prisma.idea.create({
                data: {
                    id,
                    Category: {
                        connect: {
                            id: category
                        }
                    },
                    Topic: {
                        connect: {
                            id: topic
                        }
                    },
                    content,
                    status: 1,
                    isAnomyous,
                    User: {
                        connectOrCreate: {
                            where: {
                                email: user.email,
                            },
                            create: {
                                email: user.email,
                                image: user.image,
                                name: user.name
                            },
                        }
                    }

                }
            }))
        }
        if (req.method === "GET") {
            return res.status(200).json(
                await prisma.idea.findMany({
                    select: {
                        id: true,
                        status: true,
                        Category: {
                            select: {
                                id: true,
                                name: true
                            }
                        },
                        Topic: {
                            select: {
                                id: true,
                                name: true
                            }
                        },
                        isAnomyous: true,
                        content: true,
                        User: {
                            select: {
                                name: true,
                                email: true
                            }
                        }

                    }
                })
            )
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}
