import {connectDB} from "@/util/database";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const body = req.body;
        if (body.name === '' || body.id === '' || body.password === '') {
            return res.status(500).json('내용 써');
        }
        try {
            const db = (await connectDB).db("board");
            const collection = await db.collection('member');
            const memberList = await collection.find().toArray();
            const existingUser = memberList.find((user) => user.id === body.id);
            if (existingUser) {
                return res.status(500).json('아이디 중복이요');
            }
            const insertOne = collection.insertOne(body);
            return res.status(200).redirect('/list');
        } catch (error) {
            return res.status(500).json('에러요');
        }
    }
}