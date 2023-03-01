import { addDepartment, deleteDepartmentByID, getAllDepartment, updateDepartmentByID } from "@/lib/services/department"
export default async function handler(req, res) {
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
