import prisma from "../prisma"

export const getAllIdea = async () => {
    return await prisma.idea.findMany({
        orderBy: [
            {
                updatedAt: 'desc',
            },
            {
                createdAt: 'desc',
            },
        ],
    })
}


export const addIdea = async ({ id, content, isAnomyous, category, topic }) => {
    return await prisma.idea.create({
        data: {
            id,
            content, isAnomyous,
            Category: {
                connect: {
                    id: category,
                }
            },
            Topic: {
                connect: {
                    id: topic
                }
            }

        }
    })
}

export const updateIdea = async ({ id, status }) => {
    return await prisma.idea.update({
        where: {
            id: id
        },
        data: {
            status
        }
    })
}



export const deleteIdea = async (id) => {
    return await prisma.idea.delete({
        where: {
            id: id
        }
    })
}
