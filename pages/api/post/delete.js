import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
    if(req.method === 'DELETE') {
        const body = req.body;
        console.log(body);
        try {
            const db = (await connectDB).db("board");
            const result = await db.collection('post').deleteOne({_id: new ObjectId(body.id)});
            console.log(result);
            return res.status(200).json(result);
        } catch (e) {
            return res.status(500).json('에러요');
        }
    }
}