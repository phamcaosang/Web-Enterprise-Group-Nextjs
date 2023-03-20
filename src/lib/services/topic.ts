import prisma from "../prisma"

export const getAllTopic = async () => {
    return await prisma.topic.findMany({
        select: {
            id: true,
            name: true,
            openDate: true,
            closureDateIdea: true,
            closureDateTopic: true,
            Department: {
                select: {
                    id: true,
                    name: true
                }
            }
        },
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


export const addTopic = async ({ name, department, openDate, closureDateIdea, closureDateTopic }) => {
    console.log({ name, department, openDate, closureDateIdea, closureDateTopic })
    return await prisma.topic.create({
        data: {
            name,
            departmentId: department,
            openDate,
            closureDateIdea,
            closureDateTopic
        }
    })
}

export const updateTopicById = async (id, { name, openDate, closureDateIdea, closureDateTopic }) => {
    return await prisma.topic.update({
        where: {
            id: id
        },
        data: {
            name, openDate, closureDateIdea, closureDateTopic
        }
    })
}

export const deleteTopicById = async (id) => {
    return await prisma.topic.delete({
        where: {
            id: id
        }
    })
}
