import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
        const body = req.query;
        try {
            const db = (await connectDB).db("board");
            const result = await db.collection('post').deleteOne({_id: new ObjectId(body.id)});
            res.status(200).json('삭제됨');
        } catch (e) {
            return res.status(500).json('에러요');
    }
}