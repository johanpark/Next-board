import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
        const body = req.query;
        try {
            const serverSession = await getServerSession(req, res, authOptions);
            const db = (await connectDB).db("board");
            const findOne = await db.collection('post').findOne({_id: new ObjectId(body.id)});
            if (findOne.author === serverSession.user.email || serverSession.user.role === 'admin') {
                await db.collection('post').deleteOne({_id: new ObjectId(body.id)});
                return res.status(200).json('삭제완료');
            } else {
                return res.status(500).json('에러요');
            }
        } catch (e) {
            return res.status(500).json('에러요');
    }
}