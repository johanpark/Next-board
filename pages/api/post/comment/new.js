import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
    const serverSession = await getServerSession(req, res, authOptions);
    if (req.method === 'POST') {
        const body = req.body;
        body.parent = new ObjectId(body.id);
        body.author = serverSession.user.email;
        const db = (await connectDB).db("board");
        const save = await db.collection('comment').insertOne(body);
    }
}