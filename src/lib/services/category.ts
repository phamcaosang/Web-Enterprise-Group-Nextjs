import prisma from "../prisma"

export const addCategory = async ({ name }) => {
    return await prisma.category.create({
        data: {
            name
        }
    })
}

export const editCategory = async (id, name) => {
    return await prisma.category.update({
        where: {
            id: id
        },
        data: {
            name
        }
    })
}

export const getAllCategories = async () => {
    return await prisma.category.findMany({
        orderBy: [
            {
                updatedAt: 'desc',
            },
            {
                createdAt: 'desc',
            },
        ],
        select: {
            id: true,
            name: true,
            createdAt: true,
            updatedAt: true,
        }
    })
}

export const deleteCategory = async (id) => {
    return await prisma.category.delete({
        where: {
            id: id
        }
    })
}