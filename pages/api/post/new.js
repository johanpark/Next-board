import {connectDB} from "@/util/database";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
    const serverSession = await getServerSession(req, res, authOptions);
    if(serverSession) {
        req.body.author = serverSession.user.email;
    }
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