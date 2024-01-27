import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const body = req.body;
        const params = {
            title: body.title,
            content: body.content
        };
        const db = (await connectDB).db("board");
        const updatePost = await db.collection('post').updateOne(
            {_id: new ObjectId(body.id)},
            {$set: params});
        return res.status(200).redirect('/list');
    }
}