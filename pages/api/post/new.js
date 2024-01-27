import {connectDB} from "@/util/database";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const body = req.body;
        if(body.title === '' || body.content === '') {
            return res.status(500).json('내용 써');
        }
        try {
            const db = (await connectDB).db("board");
            const save = await db.collection('post').insertOne(body);
            return res.status(200).redirect('/list');
        } catch (error) {
            return res.status(500).json('에러요');
        }
    }
}