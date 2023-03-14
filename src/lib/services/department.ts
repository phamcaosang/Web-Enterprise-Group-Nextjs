import prisma from "../prisma"

export const getAllDepartment = async () => {
    return await prisma.department.findMany({
        orderBy: [
            {
                updated_at: 'desc',
            },
            {
                created_at: 'desc',
            },
        ],
    })
}


export const addDepartment = async ({ name, status }) => {
    return await prisma.department.create({
        data: {
            name, status
        }
    })
}

export const updateDepartmentByID = async (id, { name, status }) => {
    return await prisma.department.update({
        where: {
            id: id
        },
        data: {
            name, status
        }
    })
}

export const deleteDepartmentByID = async (id) => {
    return await prisma.department.delete({
        where: {
            id: id
        }
    })
}
