import { addDepartment, deleteDepartmentByID, getAllDepartment, updateDepartmentByID } from "@/lib/services/department"
export default async function handler(req, res) {
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
